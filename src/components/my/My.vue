<template>
  <div>
    <group title="我的账号 ">
      <panel :list="userInfo" type="1"/>
    </group>
    <group title="我的办件 ">
      <cell link="/education/list" title="教育服务" value="查看更多"></cell>
      <cell link="/traffic/list" title="交通服务" value="查看更多"></cell>
      <cell link="/insurance/list" title="社保服务" value="查看更多"></cell>
      <cell link="/poorFamily/list" title="困难家庭" value="查看更多"></cell>
      <cell link="/graduate/list" title="毕业生" value="查看更多"></cell>
      <cell link="/disability/list" title="残疾人士" value="查看更多"></cell>
    </group>
  </div>
</template>

<script>
  import {Card, Cell, Grid, GridItem, Group, GroupTitle, Panel} from 'vux'
  import store from '../../store'

  export default {
    name: 'My',
    components: {
      Grid,
      GridItem,
      GroupTitle,
      Group,
      Cell,
      Panel,
      Card
    },
    methods: {
      onItemClick () {
        console.log('on item click')
      }
    },

    data () {
      return {
        userInfo: [{
          title: store.state.userInfo.name,
          desc: store.state.userInfo.role,
          src: store.state.userInfo.headImg
        }]
      }
    }
  }
</script>
