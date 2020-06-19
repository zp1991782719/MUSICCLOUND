import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS


import '@/assets/css/my.css'
import http from './utils/axios'


Vue.config.productionTip = false


Vue.prototype.$http = http


Vue.directive('zp',{
  bind(el,bind){
    console.log(el,bind)
  }
})

Vue.filter('formatDate',function(value){
  return String(value).replace(/\D/ig,'')
})

Vue.use(iView);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
