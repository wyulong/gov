<template>
  <div>
    <group title="政务公开 ">
      <cell :key="item.id" :title="item.title" v-for="item in list" is-link value="查看详情"
            @click.native="showDetail(item)"/>
    </group>
    <group title="效能监督">
      <cell link="/fast" title="效能监督" value="查看详情"/>
    </group>
    <group title="客服中心">
      <cell  title="我要咨询"  link="/consult/list"></cell>
    </group>
    <group title="投诉中心">
      <cell  link="/complain/list" title="我要投诉"></cell>
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
      showPosition () {
        this.$http.get('/get').then(data => console.log(data))
      },
      getList () {
        this.$http.post('/notice/listNotice', this.filter).then(response => {
          if (response.code === 0) {
            this.list = response.data.records
          }
        })
      },
      showDetail (item) {
        this.$router.push({name: 'NoticeDetail', params: {id: item.id}})
      }
    },
    created () {
      this.getList()
    },
    data () {
      return {
        userInfo: [{
          title: '李晓霞',
          desc: '普通用户',
          src: 'http://placehold.it/100x100'
        }],
        filter: {
          page: 1,
          limit: 20
        },
        list: []
      }
    }
  }
</script>
