<template>
  <div>
    <group title="教育服务">
      <cell :key="graduate.id" :title="graduate.title" is-link @click.native="showDetail(graduate)"
            v-for="graduate in graduates" value="查看详情"></cell>
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
      showDetail (graduate) {
        this.$router.push({name: 'GraduateDetail', params: {id: graduate.id}})
      }
    },
    data () {
      return {
        graduates: []
      }
    },
    mounted () {
      this.$http.post('/graduate/listGraduate').then(response => {
        if (response.code === 0) {
          this.graduates = response.data
        }
      })
    }
  }
</script>
