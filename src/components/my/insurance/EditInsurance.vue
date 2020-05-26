<template>
  <div>
    <group title="社保信息" label-width="5em" label-align="left">
      <selector title="社保类型" :options="list" v-model="insurance.type"></selector>
      <x-input title="缴纳月份" v-model="insurance.imonth" placeholder="请填缴纳月份"></x-input>
      <x-input title="缴纳金额" v-model="insurance.amount" placeholder="请填缴纳金额"></x-input>
    </group>
    <br>
    <box gap="10px 10px">
      <flexbox>
        <flexbox-item>
          <x-button type="default" @click.native="back">返回</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary" @click.native="submit">提交</x-button>
        </flexbox-item>
      </flexbox>
    </box>
    <toast v-model="submitSuccess" @on-hide="back">修改成功</toast>

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
    Selector,
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
      Toast,
      Selector

    },
    methods: {
      back () {
        this.$router.push({name: 'InsuranceDetail', params: {id: this.insurance.id}})
      },
      submit () {
        console.log('submit')
        this.$http.post('/insurance/editInsurance', this.insurance).then(response => {
          if (response.code === 0) {
            this.submitSuccess = true
          }
        })
      }
    },
    data () {
      return {
        insurance: {
          school: '',
          schoolYear: 2020,
          major: '',
          title: '',
          content: '',
          status: 0,
          reply: ''
        },
        submitSuccess: false,
        list: [
          {key: 1, value: '医保'},
          {key: 2, value: '养老'},
          {key: 3, value: '生育'},
          {key: 4, value: '失业'},
          {key: 5, value: '工伤'}
        ],
      }
    },
    mounted () {
      let id = this.$route.params.id
      this.$http.get('/insurance/getInsurance?id=' + id).then(response => {
        if (response.code === 0) {
          this.insurance = response.data
        }
      })
    }
  }
</script>
