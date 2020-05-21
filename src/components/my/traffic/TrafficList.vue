<template>
  <div>
    <group title="交通服务">
      <cell :key="traffic.id" :title="traffic.title" is-link @click.native="showDetail(traffic)"
            v-for="traffic in traffics" value="查看详情"></cell>
    </group>
  </div>
</template>

<script>
  import {
    Box,
    Cell,
    Divider,
    Flexbox,
    FlexboxItem,
    Group,
    GroupTitle,
    Toast,
    XButton,
    XInput,
    XNumber,
    XTextarea
  } from 'vux'

  export default {
    components: {
      Group,
      GroupTitle,
      Cell,
      XInput,
      XNumber,
      XTextarea,
      XButton,
      Box,
      Flexbox,
      FlexboxItem,
      Divider,
      Toast
    },
    methods: {
      showDetail (traffic) {
        this.$router.push({name: 'TrafficDetail', params: {id: traffic.id}})
      }
    },
    data () {
      return {
        traffics: []
      }
    },
    mounted () {
      this.$http.post('/traffic/listTraffic').then(response => {
        if (response.status === 200) {
          this.traffics = response.data
        }
      })
    }
  }
</script>
