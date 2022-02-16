import { computed, Ref, ComputedRef } from 'vue'

import { usePagination } from 'vue-request'

import type { IListParams } from '@/service/Api/Inbox'

import type { ITableList } from '@/service/Api/types'

import type { IPagination } from './types'

const useListRequest = <T>(
  request: (params: IListParams) => Promise<ITableList<T>>
): {
  loading: Ref<boolean>
  pagination: ComputedRef<IPagination>
  list: ComputedRef<T>
  amount: ComputedRef<{
    total: number
    unread: number
  }>
} => {
  const { loading, data, current, pageSize, total } = usePagination(request, {
    pagination: {
      currentKey: 'meta.current_page',
      totalKey: 'meta.total'
    }
  })

  const pagination = computed(() => ({
    position: ['bottomCenter'],
    showQuickJumper: true,
    showTotal: (total: number) => `共 ${total} 条`,
    total: total.value,
    current: current.value,
    pageSize: pageSize.value,
    onChange: (size: number) => {
      current.value = size
    },
    pageSizeOptions: [10]
  }))

  const list = computed(() => data.value?.data || []) as any

  const amount = computed(() => ({
    total: total.value || 0,
    unread: data.value?.count || 0
  }))

  return {
    loading,
    pagination,
    list,
    amount
  }
}

export default useListRequest
