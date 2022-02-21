export const columns = [
  {
    name: 'icon',
    dataIndex: 'icon',
    key: 'icon',
    width: '5%'
  },
  {
    title: '主题',
    dataIndex: 'subject',
    key: 'subject',
    width: '15%',
    ellipsis: true
  },
  {
    title: '时间',
    dataIndex: 'create_at',
    key: 'create_at',
    width: '15%'
  },
  {
    title: '回复内容',
    dataIndex: 'content',
    key: 'content',
    width: '55%',
    ellipsis: true
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    width: '10%'
  }
]
