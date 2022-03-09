import clone from '@/components/lib/clone';

const localStorageKeyName = 'recordList';
const recordModel = {
  data: [] as RecordItem[],
  create(record:RecordItem){
    //record2 深拷贝 record ，record 是对象，传值，不能直接Push
    const record2: RecordItem = clone(record);
    record2.createAt = new Date();
    this.data.push(record2);
  },
  fetch() {
    // @ts-ignore
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem;
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));

  }
};

export default recordModel;