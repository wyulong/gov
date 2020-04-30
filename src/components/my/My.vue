<template>
  <div>
    <group title="我的账号 ">
      <panel :list="userInfo" type="1"/>
    </group>
    <group title="我的办件 ">
      <cell title="办理中" link="/" value="2"></cell>
      <cell title="已完成" link="/" value="4"></cell>
    </group>
  </div>
</template>

<script>
  import {Card, Cell, Grid, GridItem, Group, GroupTitle, Panel} from 'vux'

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
          title: '李晓霞',
          desc: '普通用户',
          src: 'http://placehold.it/100x100'
        }]
      }
    }
  }
</script>
