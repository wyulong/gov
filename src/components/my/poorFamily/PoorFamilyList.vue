<template>
  <div>
    <group title="贫困家庭">
      <cell :key="poorFamily.id" :title="poorFamily.title" is-link @click.native="showDetail(poorFamily)"
            v-for="poorFamily in poorFamilys" value="查看详情"></cell>
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
      showDetail (poorFamily) {
        this.$router.push({name: 'PoorFamilyDetail', params: {id: poorFamily.id}})
      }
    },
    data () {
      return {
        poorFamilys: []
      }
    },
    mounted () {
      this.$http.post('/poorFamily/listPoorFamily').then(response => {
        if (response.status === 200) {
          this.poorFamilys = response.data
        }
      })
    }
  }
</script>
