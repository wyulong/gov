<template>
  <div>
    <group-title>热点服务</group-title>
    <grid>
      <grid-item label="教育服务" link="/education/add">
        <img slot="icon" src="../../../static/icon/education.png">
      </grid-item>
      <grid-item label="交通服务" link="/traffic/add">
        <img slot="icon" src="../../../static/icon/traffic.png">
      </grid-item>
      <grid-item label="社保服务"  link="/insurance/add">
        <img slot="icon" src="../../../static/icon/shebao.png">
      </grid-item>
    </grid>
    <group-title> 底线民生</group-title>
    <grid>
      <grid-item label="困难家庭" link="/poorFamily/add">
        <img slot="icon" src="../../../static/icon/poorFamily.png">
      </grid-item>
      <grid-item label="毕业生" link="/graduate/add">
        <img slot="icon" src="../../../static/icon/graduate.png">
      </grid-item>
      <grid-item label="残疾人士" link="/disability/add">
        <img slot="icon" src="../../../static/icon/disability.png">
      </grid-item>
    </grid>
    <group title="办事指南 ">
      <cell :key="item.id" :title="item.title" v-for="item in list" is-link value="查看详情"
            @click.native="showDetail(item)"/>
    </group>
  </div>
</template>

<script>
  import {Cell, Grid, GridItem, Group, GroupTitle} from 'vux'

  export default {
    name: 'Service',
    components: {
      Grid,
      GridItem,
      GroupTitle,
      Group,
      Cell
    },
    data () {
      return {
        filter: {
          page: 1,
          limit: 20
        },
        list: []
      }
    },
    methods: {
      onItemClick () {
        console.log('on item click')
        this.$http.get('/get.json').then((res) => console.log(res)).catch(error => {
          console.log(error)
        })
      },
      getList () {
        this.$http.post('/guidance/listGuidance', this.filter).then(response => {
          if (response.code === 0) {
            this.list = response.data.records
          }
        })
      },
      showDetail (item) {
        this.$router.push({name: 'GuideDetail', params: {id: item.id}})
      }
    },
    created () {
      this.getList()
    }
  }
</script>

<style scoped>
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }

  .weui-grids {
    background-color: #fff;
  }
</style>
