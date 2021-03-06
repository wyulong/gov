import axios from 'axios'
import store from '@/store'
import wechat from '../configs/wechat'
import Vue from 'vue'

const service = axios.create({
  baseURL: wechat.VUE_APP_API_URL,
  timeout: 5000
})

// http请求拦截器
service.interceptors.request.use(config => {
  const {accessToken} = store.getters
  if (accessToken) config.headers.token = `${accessToken}`
  return config
}, error => {
  return Promise.reject(error)
})

// http响应拦截器
service.interceptors.response.use(response => {
  const res = response.data
  // if the custom code is not 20000, it is judged as an error.
  if (res.code !== 0) {
    Vue.$vux.toast.text(res.msg || 'Error', 'top')
    if (res.code === 401 || res.code === 403) {
      store.dispatch('setLoginStatus', 0)
      // 重新登录
      window.location.reload()
    }
  } else {
    return res
  }
}, error => {
  return Promise.reject(error)
})

export default service
