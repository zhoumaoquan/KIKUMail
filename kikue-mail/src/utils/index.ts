export function fileOpenPreview(path: string): void {
  window.open(
    'https://view.officeapps.live.com/op/view.aspx?src=' + path,
    '_blank'
  )
}

// 防抖函数
export function debounce(
  fn: (...agr: any[]) => void,
  delay: number
): () => void {
  let timer: number | undefined
  return function (this: unknown, ...agrs: any[]) {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply<unknown, any[], void>(this, agrs)
    }, delay)
  }
}
