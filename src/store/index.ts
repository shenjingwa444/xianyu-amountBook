import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/components/lib/clone';
import createId from '@/components/lib/createId';

Vue.use(Vuex);
type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?:Tag
}
const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag:undefined
  } as RootState,
  mutations: {
    setCurrentTag(state,id:string){
      state.currentTag = state.tagList.filter(t => t.id === id)[0]
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      //record2 深拷贝 record ，record 是对象，传值，不能直接Push
      const record2: RecordItem = clone(record);
      record2.createAt = new Date();
      state.recordList.push(record2);
      store.commit('saveRecords');
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    createTag(state,name:string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复了');
      }
      const id = createId().toString();
      state.tagList.push({id, name: name});
      store.commit('saveTags');
      window.alert('添加成功');
    },
  },
});

export default store;
