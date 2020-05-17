import Vue from 'vue'
import Router from 'vue-router'
import Service from '@/components/service/Service'
import Chat from '@/components/chat/Chat'
import My from '@/components/my/My'
import AddEducation from '../components/service/AddEducation'
import EducationList from '../components/my/EducationList'
import EducationDetail from '../components/my/EducationDetail'
import EditEducation from '../components/my/EditEducation'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Service
    },
    {
      path: '/service',
      component: Service
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/education/add',
      component: AddEducation
    },
    {
      path: '/education/list',
      component: EducationList
    },
    {
      path: '/education/detail',
      name: 'EducationDetail',
      component: EducationDetail
    },
    {
      path: '/education/edit',
      name: 'EditEducation',
      component: EditEducation
    }
  ]
})
