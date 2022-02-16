import E from 'wangeditor'

import img from '@/assets/image/annex.png'

const { BtnMenu } = E

class AnnexMenu extends BtnMenu {
  constructor(editor: E) {
    // data-title属性表示当鼠标悬停在该按钮上时提示该按钮的功能简述
    const $elem = E.$(
      `<div class="w-e-menu" data-title="上传附件">
              <img src="${img}" />
          </div>`
    )
    super($elem, editor)

    this.editor = editor
  }
  // 菜单点击事件
  clickHandler(): void {
    this.editor.annexMenuCallback?.()
  }
  tryChangeActive(): void {
    this.active()
  }
}

export default AnnexMenu
