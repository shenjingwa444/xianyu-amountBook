import recordModel from '@/models/recordModel';
import newTagModel from '@/models/newTagModel';

const store = {
  //record store
  recordList: recordModel.fetch(),
  createRecord: (record: RecordItem) => recordModel.create(record),
  //tag store
  tagList: newTagModel.fetch(),
  findTag(id: string) {
    return this.tagList.filter(tag => tag.id === id)[0];
  },
  createTag: (name: string) => {
    const message = newTagModel.create(name);
    if (message === 'duplicated') {
      window.alert('标签名重复了');
    } else if (message === 'success') {
      window.alert('添加成功');
    }
  },
  removeTag: (id: string) => {
    return newTagModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return newTagModel.update(id, name);
  },
};

export default store
