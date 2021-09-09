import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL='http://localhost:8080';  //设置一个类似base_url的请求路径
global.axios=axios;
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
