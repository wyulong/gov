<template>
  <div>
    <group title="政务公开">
      <cell link="/" title="公告1" value="2"/>
      <cell link="/" title="公告2" value="4"/>
    </group>
    <group title="效能监督">
      <cell link="/" title="监督事件1" value="2"/>
      <cell link="/" title="监督事件2" value="4"/>
    </group>
    <group title="客服中心">
      <cell @click="showPosition" title="我要咨询"></cell>
    </group>
    <group title="投诉中心">
      <cell link="/" title="我要投诉"></cell>
    </group>


  </div>
</template>

<script>
  import {Card, Cell, Grid, GridItem, Group, GroupTitle, Panel} from 'vux'

  export default {
    name: 'Chat',
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
      },
      showPosition () {
        this.$http.get('/get').then(data => console.log(data))
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
