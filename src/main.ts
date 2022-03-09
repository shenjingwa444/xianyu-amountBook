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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
