<template>
  <div>
    <group-title>热点服务</group-title>
    <grid>
      <grid-item label="教育服务">
        <img slot="icon" src="http://placehold.it/100x100">
      </grid-item>
      <grid-item label="交通服务">
        <img slot="icon" src="http://placehold.it/100x100">
      </grid-item>
      <grid-item label="社保服务">
        <img slot="icon" src="http://placehold.it/100x100">
      </grid-item>
    </grid>
    <group-title> 底线民生</group-title>
    <grid>
      <grid-item label="困难家庭">
        <img slot="icon" src="http://placehold.it/100x100">
      </grid-item>
      <grid-item label="毕业生">
        <img slot="icon" src="http://placehold.it/100x100">
      </grid-item>
      <grid-item label="残疾人士" icon="http://placehold.it/100x100">
      </grid-item>
    </grid>
    <group title="办事指南 ">
      <cell v-for="i in 6" :key="i" :title="i" link="/" value="查看详情"></cell>
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
    methods: {
      onItemClick () {
        console.log('on item click')
      }
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
