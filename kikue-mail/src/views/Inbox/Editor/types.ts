export enum ValueKey {
  Content = 'reply_content',
  Id = 'contribution_annex_id',
  Files = 'files'
}

export type SetReplyFn = (key: ValueKey, value: any) => void
