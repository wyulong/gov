<template>
  <div>
    <group title="贫困家庭">
      <cell :key="disability.id" :title="disability.title" is-link @click.native="showDetail(disability)"
            v-for="disability in disabilitys" value="查看详情"></cell>
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
      showDetail (disability) {
        this.$router.push({name: 'DisabilityDetail', params: {id: disability.id}})
      }
    },
    data () {
      return {
        disabilitys: []
      }
    },
    mounted () {
      this.$http.post('/disability/listDisability').then(response => {
        if (response.status === 200) {
          this.disabilitys = response.data
        }
      })
    }
  }
</script>
