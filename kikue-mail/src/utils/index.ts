export function fileOpenPreview(path: string): void {
  window.open(
    'https://view.officeapps.live.com/op/view.aspx?src=' + path,
    '_blank'
  )
}
