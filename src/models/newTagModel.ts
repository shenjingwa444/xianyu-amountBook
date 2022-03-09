import createId from '@/components/lib/createId';

const localStorageKeyName = 'tagList';
type Tag = {
  id: string
  name: string
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated'  // 联合类型，返回值只能是这两个
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove:(id:string) =>boolean
  save: () => void
}
const newTagModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  update(id: string, name: string) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >=0) {
        return 'duplicated';
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  remove(id:string){
    let index = -1
    for(let i=0; i<this.data.length;i++){
      if(this.data[i].id===id){
        index = i
        break
      }
    }
    this.data.splice(index,1)
    this.save()
    return true
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  create(name) {
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {return 'duplicated';}
    const id = createId().toString()
    this.data.push({id, name: name});
    this.save();
    return 'success';
  }
};

export default newTagModel;