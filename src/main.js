import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import { routes } from './routes';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './styles/css/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




// const VUE_APP_BASE_URL = process.env.VUE_APP_BASE_URL || '/';
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(IconsPlugin);
Vue.config.productionTip = false
const router = new VueRouter({ 
  routes, 
  mode: 'history',
  base: '/GSRE-CentralSinistroRE/'
});
Vue.config.productionTip = false 

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
