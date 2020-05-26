<template>
  <div>
    <group title="社保服务">
      <cell :key="insurance.id" :title="insurance.imonth + '-' +typeFilter(insurance.type)" is-link @click.native="showDetail(insurance)"
            v-for="insurance in insurances" value="查看详情"></cell>
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
      showDetail (insurance) {
        this.$router.push({name: 'InsuranceDetail', params: {id: insurance.id}})
      },
      typeFilter (status) {
        const statusMap = {
          1: '医保',
          2: '养老',
          3: '生育',
          4: '失业',
          5: '工伤'
        }
        return statusMap[status]
      }
    },
    data () {
      return {
        insurances: []
      }
    },
    mounted () {
      this.$http.post('/insurance/listInsurance').then(response => {
        if (response.code === 0) {
          this.insurances = response.data
        }
      })
    }
  }
</script>
