<template>
  <Layout :loading="loading || sendLoading">
    <PageHeader />

    <div class="editor-container">
      <div class="editor-info-line">
        <div class="editor-info-label">手抄报</div>
        <div class="editor-info-content">{{ inquire }}</div>
      </div>
      <div class="editor-info-line">
        <div class="editor-info-label">主题</div>
        <div class="editor-info-content">
          {{ data?.subject }}
        </div>
      </div>
      <div class="editor-main">
        <div class="editor-info-label">正文</div>
        <div class="editor-main-box">
          <Editor ref="editorRef" />
          <div class="other" v-if="replyContent.files.length">
            <p class="other-title">
              ---------- 附 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;件 ----------
            </p>
            <FileList
              v-model:data-source="replyContent.files"
              :show-type="Display.UPLOAD"
            />
          </div>

          <div class="other">
            <p class="other-title">---------- 原始邮件 ----------</p>
            <a-descriptions :column="2">
              <a-descriptions-item label="发件人">{{
                original?.sender || 'LSS直投系统'
              }}</a-descriptions-item>
              <a-descriptions-item label="查询"
                >&lt;{{ inquire }}></a-descriptions-item
              >
              <a-descriptions-item label="时间">{{
                original?.create_at
              }}</a-descriptions-item>
              <a-descriptions-item label="主题">
                {{ original?.subject }}
              </a-descriptions-item>
            </a-descriptions>
          </div>
        </div>
      </div>

      <div class="editor-btn">
        <a-button type="primary" size="large" @click="sendMail">
          <template #icon><send-outlined /></template>
          发送</a-button
        >
      </div>
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import { computed, provide, reactive, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Layout from '@/Layout/components/Layout/index.vue'
import PageHeader from '@/components/PageHeader/index.vue'
import Editor from '@/components/Editor/index.vue'
import FileList from '@/components/FileList'
import { Display } from '@/components/FileList/config'
import { SendOutlined } from '@ant-design/icons-vue'
import { useRequest } from 'vue-request'
import { message } from 'ant-design-vue'
import { replyDetail, IReplyParams, replyMail } from '@/service/Api/Inbox'
import { getStorage } from '@/utils/storage'
import { USER_INFO } from '@/assets/context'
import { REPLY } from '../config'
import { ValueKey, SetReplyFn } from './types'
import type { IExposeEditor } from '@/components/Editor/types'

const route = useRoute()

const router = useRouter()

const id = computed(() => Number(route.params.id))
const type = computed(() => Number(route.query.type))

const editorRef = ref<IExposeEditor>()

const replyContent = reactive<IReplyParams>({
  reply_content: '',
  contribution_annex_id: id.value,
  files: []
})

const setReplyContent = (key: ValueKey, value: any) => {
  switch (key) {
    case ValueKey.Content:
      replyContent.reply_content = value
      break
    case ValueKey.Files:
      replyContent.files = [...replyContent.files, ...value]
      break
    default:
      break
  }
}

provide<SetReplyFn>(REPLY, setReplyContent)

const { loading, data } = useRequest(replyDetail, {
  defaultParams: [id.value],
  formatResult: (data) => {
    return data.data
  }
})

const { loading: sendLoading, run } = useRequest(replyMail, {
  manual: true,
  onSuccess() {
    message.success('邮件回复成功', 2, () => {
      router.go(-2)
    })
  }
})

onMounted(() => {
  const flag = type.value
  if (flag && flag === 2) {
    editorRef.value?.getHTMLContent('<p><b>录用</b></p>')
  }
})

const inquire = computed(() => {
  const userInfo = getStorage(USER_INFO)

  return userInfo.name
})
const original = computed(() => data.value?.original)

const sendMail = () => {
  replyContent.reply_content = editorRef.value?.getHTMLContent(undefined) || ''

  if (!replyContent.reply_content.trim().length) {
    return message.warning('请填写邮件正文')
  }

  const formData = new FormData()

  formData.append(ValueKey.Id, String(replyContent.contribution_annex_id))
  formData.append(ValueKey.Content, replyContent.reply_content)

  replyContent.files.forEach((file: any) => {
    formData.append('files[]', file as any)
  })

  run(formData)
}
</script>

<style lang="less" scoped>
.editor-info-line {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.editor-info-label {
  flex-shrink: 0;
  width: 70px;
  font-size: 16px;
  font-family: HarmonyOS Sans SC;
  line-height: 30px;
  color: #2d3541;
}

.editor-info-content {
  box-sizing: border-box;
  padding: 0 15px;
  flex: 1;
  height: 40px;
  background-color: #f0f4fc;
  border-radius: 6px;

  font-size: 14px;
  font-family: HarmonyOS Sans SC;
  line-height: 40px;
  color: #2d3541;
}

.editor-main {
  display: flex;
}

.editor-main-box {
  height: 550px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #edf1fb;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #349e81;
    border-radius: 20px;
  }
}

.other {
  margin-top: 10px;
}
.other-title {
  padding-bottom: 20px;
  font-size: 14px;
  font-family: HarmonyOS Sans SC;
  line-height: 27px;
  color: #2d3541;
}

.editor-btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
