<template>
  <div>
    <group title="社保信息" label-width="5em" label-align="left">
      <cell title="社保类型" :value="typeFilter"></cell>
      <cell title="缴纳月份" v-model="insurance.imonth"></cell>
      <cell title="缴纳金额" v-model="insurance.amount"></cell>
    </group>

    <group title="处理进度" label-width="5em" label-align="left">
      <cell title="状态" :value="statusDesc"></cell>
      <cell title="办理时间" :value="formateTime"></cell>
      <cell title="修改时间" v-if="formateTime !== updateTime" :value="updateTime"></cell>
      <x-textarea v-if="insurance.status !== 0" title="回复信息" v-model="insurance.reply" readonly
                  :show-counter="false"
                  :rows="4"></x-textarea>

    </group>

    <box gap="10px 10px">
      <flexbox>
        <flexbox-item v-if="insurance.status !== 2">
          <x-button type="primary" @click.native="edit">修改</x-button>
        </flexbox-item>
        <flexbox-item v-if="insurance.status !== 2">
          <x-button type="warn" @click.native="remove">删除</x-button>
        </flexbox-item>
      </flexbox>
      <br>
      <flexbox>
        <flexbox-item>
          <x-button type="default" @click.native="back">返回</x-button>
        </flexbox-item>
      </flexbox>
      <toast v-model="submitSuccess" @on-hide="back">删除成功</toast>
    </box>
  </div>
</template>

<script>
  import {
    Box,
    Cell,
    dateFormat,
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
      dateFormat,
      Selector
    },
    computed: {
      formateTime () {
        return this.insurance.createTime.replace('T', ' ')
      },
      updateTime () {
        return this.insurance.updateTime.replace('T', ' ')
      },
      statusDesc () {
        switch (this.insurance.status) {
          case 0:
            return '未处理'
          case 1:
            return '处理中'
          case 2:
            return '已完成'
        }
      },
      typeFilter () {
        const statusMap = {
          1: '医保',
          2: '养老',
          3: '生育',
          4: '失业',
          5: '工伤'
        }
        return statusMap[this.insurance.type]
      }
    },
    methods: {
      back () {
        this.$router.push('/insurance/list')
      },
      remove () {
        this.$http.post('/insurance/deleteInsurance', this.insurance).then(response => {
          if (response.code === 0) {
            this.submitSuccess = true
          }
        })
      },
      edit () {
        this.$router.push({name: 'EditInsurance', params: {id: this.insurance.id}})
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
          reply: '',
          createTime: '',
          updateTime: ''
        },
        submitSuccess: false
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
