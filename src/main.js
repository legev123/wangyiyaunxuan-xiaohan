import Vue from 'vue'
import App from './App.vue'
// 引入适配
import 'lib-flexible/flexible'
// 注册路由
import router from "@/router"
//引入iconfont
import "@/common/iconfont/iconfont.css"
// AXIOS
import http from '@/utils/contactHttp.js'
Vue.prototype.$http = http

//引入仓库
import store from "@/store/index.js"
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
