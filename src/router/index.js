import Vue from 'vue'
import Router from 'vue-router'
import Service from '@/components/service/Service'
import Chat from '@/components/chat/Chat'
import My from '@/components/my/My'
import AddEducation from '../components/service/AddEducation'
import EducationList from '../components/my/education/EducationList'
import EducationDetail from '../components/my/education/EducationDetail'
import EditEducation from '../components/my/education/EditEducation'
import AddGraduate from '../components/service/AddGraduate'
import GraduateList from '../components/my/graduate/GraduateList'
import GraduateDetail from '../components/my/graduate/GraduateDetail'
import EditGraduate from '../components/my/graduate/EditGraduate'
import AddTraffic from '../components/service/AddTraffic'
import TrafficList from '../components/my/traffic/TrafficList'
import TrafficDetail from '../components/my/traffic/TrafficDetail'
import EditTraffic from '../components/my/traffic/EditTraffic'
import AddPoorFamily from '../components/service/AddPoorFamily'
import PoorFamilyList from '../components/my/poorFamily/PoorFamilyList'
import PoorFamilyDetail from '../components/my/poorFamily/PoorFamilyDetail'
import EditPoorFamily from '../components/my/poorFamily/EditPoorFamily'
import AddDisability from '../components/service/AddDisability'
import DisabilityList from '../components/my/disability/DisabilityList'
import DisabilityDetail from '../components/my/disability/DisabilityDetail'
import EditDisability from '../components/my/disability/EditDisability'

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
    },
    {
      path: '/graduate/add',
      component: AddGraduate
    },
    {
      path: '/graduate/list',
      component: GraduateList
    },
    {
      path: '/graduate/detail',
      name: 'GraduateDetail',
      component: GraduateDetail
    },
    {
      path: '/graduate/edit',
      name: 'EditGraduate',
      component: EditGraduate
    },
    {
      path: '/traffic/add',
      component: AddTraffic
    },
    {
      path: '/traffic/list',
      component: TrafficList
    },
    {
      path: '/traffic/detail',
      name: 'TrafficDetail',
      component: TrafficDetail
    },
    {
      path: '/traffic/edit',
      name: 'EditTraffic',
      component: EditTraffic
    },
    {
      path: '/poorFamily/add',
      component: AddPoorFamily
    },
    {
      path: '/poorFamily/list',
      component: PoorFamilyList
    },
    {
      path: '/poorFamily/detail',
      name: 'PoorFamilyDetail',
      component: PoorFamilyDetail
    },
    {
      path: '/poorFamily/edit',
      name: 'EditPoorFamily',
      component: EditPoorFamily
    },
    {
      path: '/disability/add',
      component: AddDisability
    },
    {
      path: '/disability/list',
      component: DisabilityList
    },
    {
      path: '/disability/detail',
      name: 'DisabilityDetail',
      component: DisabilityDetail
    },
    {
      path: '/disability/edit',
      name: 'EditDisability',
      component: EditDisability
    }

  ]
})
