import {ACCESS_TOKEN, loadCookie, loadStorage, LOGIN_STATUS, USER_INFO} from '../utils/cache'

const state = {
  loginStatus: Number(loadCookie(LOGIN_STATUS, 0)),
  accessToken: loadStorage(ACCESS_TOKEN, ''),
  userInfo: loadStorage(USER_INFO, {})
}

export default state
