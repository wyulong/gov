<template>
  <div>

    <group title="投诉信息" label-width="5em" label-align="left">
      <cell title="投诉标题" v-model="complain.title"></cell>
      <x-textarea title="投诉信息" v-model="complain.content" readonly :show-counter="false"
                  :rows="4"></x-textarea>

    </group>
    <group title="处理进度" label-width="5em" label-align="left">
      <cell title="状态" :value="statusDesc"></cell>
      <cell title="办理时间" :value="formateTime"></cell>
      <cell title="修改时间" v-if="formateTime !== updateTime" :value="updateTime"></cell>
      <x-textarea v-if="complain.status !== 0" title="回复信息" v-model="complain.reply" readonly
                  :show-counter="false"
                  :rows="4"></x-textarea>

    </group>

    <box gap="10px 10px">
      <flexbox>
        <flexbox-item v-if="complain.status !== 2">
          <x-button type="primary" @click.native="edit">修改</x-button>
        </flexbox-item>
        <flexbox-item v-if="complain.status !== 2">
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
        return this.complain.createTime.replace('T', ' ')
      },
      updateTime () {
        return this.complain.updateTime.replace('T', ' ')
      },
      statusDesc () {
        switch (this.complain.status) {
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
        this.$router.push('/complain/list')
      },
      remove () {
        this.$http.post('/complainMessage/deleteComplainMessage', this.complain).then(response => {
          if (response.code === 0) {
            this.submitSuccess = true
          }
        })
      },
      edit () {
        this.$router.push({name: 'EditComplainMessage', params: {id: this.complain.id}})
      }
    },
    data () {
      return {
        complain: {
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
      this.$http.get('/complainMessage/getComplainMessage?id=' + id).then(response => {
        if (response.code === 0) {
          this.complain = response.data
        }
      })
    }
  }
</script>
