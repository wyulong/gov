import Vue from 'vue'
import Router from 'vue-router'
import Service from '@/components/service/Service'
import Chat from '@/components/chat/Chat'
import My from '@/components/my/My'

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
  ]
})
