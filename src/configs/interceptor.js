import Vue from 'vue'
import qs from 'qs'
import router from '@/router'
import store from '@/store'
import wechatAuth from '@/plugins/wechatAuth'
import wechat from './wechat'
import service from '../utils/request'

Vue.use(wechatAuth, {
  appid: wechat.VUE_APP_WECHAT_APP_ID,
  redirect_uri: wechat.VUE_APP_BASE_URL
})

router.beforeEach(async (to, from, next) => {
  const {loginStatus} = store.state
  switch (loginStatus) {
    case 0:
      wechatAuth.redirect_uri = processUrl()
      await store.dispatch('setLoginStatus', 1)
      window.location.href = wechatAuth.authUrl
      break
    case 1:
      try {
        var path = window.location.href
        if (path.endsWith('#/')) {
          path = path.substr(0, path.length - 2)
        }
        wechatAuth.returnFromWechat(path)
        await processLogin(wechatAuth.code)
        next()
      } catch (err) {
        console.log('error')
        console.log(err)

        await store.dispatch('setLoginStatus', 0)
        next()
      }
      break
    case 2:
      next()
      break
    default:
      break
  }
})

/**
 * 处理url链接
 * @returns {string}
 */
function processUrl () {
  const url = window.location.href
  // 解决多次登录url添加重复的code与state问题
  const urlParams = qs.parse(url.split('?')[1])
  let redirectUrl = url
  if (urlParams.code && urlParams.state) {
    delete urlParams.code
    delete urlParams.state
    const query = qs.stringify(urlParams)
    if (query.length) {
      redirectUrl = `${url.split('?')[0]}?${query}`
    } else {
      redirectUrl = `${url.split('?')[0]}`
    }
  }
  return redirectUrl
}

/**
 * 处理登录
 * @param code
 * @returns {Promise<any>}
 */
function processLogin (code) {
  console.log('processLogin' + code)
  const data = {
    code
  }
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      await service({
        url: '/user/login',
        method: 'post',
        data
      }).then(response => {
        let token = response.data.accessToken
        let user = response.data.userInfo
        console.log(token)
        console.log(user)

        store.dispatch('setLoginStatus', 2)
        store.dispatch('setAccessToken', token)
        store.dispatch('setUserInfo', user)
      })

      resolve({data: '登录成功'})
    } catch (err) {
      reject(err)
    }
  })
}
