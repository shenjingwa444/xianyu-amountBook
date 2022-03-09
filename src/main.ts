import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icons from '@/components/Icons.vue';
import newTagModel from '@/models/newTagModel';
import recordModel from '@/models/recordModel';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icons);

//record store
window.recordList = recordModel.fetch();
window.createRecord = (record:RecordItem)=> recordModel.create(record)


//tag store
window.tagList = newTagModel.fetch();
window.findTag = (id:string) =>{
  return window.tagList.filter(tag => tag.id === id)[0];

}
window.createTag = (name: string) => {
  const message = newTagModel.create(name);
  if (message === 'duplicated') {
    window.alert('标签名重复了');
  } else if (message === 'success') {
    window.alert('添加成功');
  }
};
window.removeTag = (id:string)=>{
  return newTagModel.remove(id);
}
window.updateTag = (id:string,name:string) =>{
  return newTagModel.update(id, name);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
