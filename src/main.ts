import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icons from '@/components/Icons.vue';
import newTagModel from '@/models/newTagModel';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icons);
window.tagList = newTagModel.fetch();
window.createTag = (name: string) => {
  const message = newTagModel.create(name);
  if (message === 'duplicated') {
    window.alert('标签名重复了');
  } else if (message === 'success') {
    window.alert('添加成功');
  }
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
