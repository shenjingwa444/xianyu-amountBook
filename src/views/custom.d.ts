type RecordItem = {
  tags: string[]
  type: string
  notes: string
  amount: number
  createAt?: Date
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

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  //updateTag:(id:string,name:string) => TagListModel['update'],返回值和 TagListModel 的 update 完全一样，可简写
  findTag: (id: string) => Tag | undefined;
}
