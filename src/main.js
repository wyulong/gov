import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import '@/configs/interceptor'
import service from './utils/request'
import { ToastPlugin } from 'vux'

Vue.use(ToastPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.$http = service

Vue.http = service

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
