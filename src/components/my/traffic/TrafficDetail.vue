<template>
  <div>
    <group title="车辆信息" label-width="5em" label-align="left">
      <cell title="车牌号" v-model="traffic.carNumber"></cell>
    </group>
    <group title="业务信息" label-width="5em" label-align="left">
      <cell title="标题" v-model="traffic.title"></cell>
      <x-textarea title="详细信息" v-model="traffic.content" readonly :show-counter="false"
                  :rows="4"></x-textarea>

    </group>
    <group title="处理进度" label-width="5em" label-align="left">
      <cell title="状态" :value="statusDesc"></cell>
      <cell title="办理时间" :value="formateTime"></cell>
      <cell title="修改时间" v-if="formateTime !== updateTime" :value="updateTime"></cell>
      <x-textarea v-if="traffic.status !== 0" title="回复信息" v-model="traffic.reply" readonly
                  :show-counter="false"
                  :rows="4"></x-textarea>

    </group>

    <box gap="10px 10px">
      <flexbox>
        <flexbox-item v-if="traffic.status !== 2">
          <x-button type="primary" @click.native="edit">修改</x-button>
        </flexbox-item>
        <flexbox-item v-if="traffic.status !== 2">
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
      dateFormat
    },
    computed: {
      formateTime () {
        return this.traffic.createTime.replace('T', ' ')
      },
      updateTime () {
        return this.traffic.updateTime.replace('T', ' ')
      },
      statusDesc () {
        switch (this.traffic.status) {
          case 0:
            return '未处理'
          case 1:
            return '处理中'
          case 2:
            return '已完成'
        }
      }
    },
    methods: {
      back () {
        this.$router.push('/traffic/list')
      },
      remove () {
        this.$http.post('/traffic/deleteTraffic', this.traffic).then(response => {
          if (response.code === 0) {
            this.submitSuccess = true
          }
        })
      },
      edit () {
        this.$router.push({name: 'EditTraffic', params: {id: this.traffic.id}})
      }
    },
    data () {
      return {
        traffic: {
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
      this.$http.get('/traffic/getTraffic?id=' + id).then(response => {
        if (response.code === 0) {
          this.traffic = response.data
        }
      })
    }
  }
</script>
