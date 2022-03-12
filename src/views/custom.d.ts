type RecordItem = {
  tags: Tag[]
  type: string
  notes: string
  amount: number
  createAt?: string
}
type Tag = {
  id: string
  name: string
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated'  // 联合类型，返回值只能是这两个
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}