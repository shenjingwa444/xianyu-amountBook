import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/components/lib/clone';

Vue.use(Vuex)
const localStorageKeyName = 'recordList';

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
  },
  mutations: {
    saveRecords(state){
      window.localStorage.setItem(localStorageKeyName, JSON.stringify(state.recordList));
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },
    createRecord(state,record){
      //record2 深拷贝 record ，record 是对象，传值，不能直接Push
      const record2: RecordItem = clone(record);
      record2.createAt = new Date();
      state.recordList.push(record2);
      console.log(state.recordList);
      store.commit('saveRecords');
    },
  },
})

export default store
