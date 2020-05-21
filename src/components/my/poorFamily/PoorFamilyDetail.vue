<template>
  <div>
    <group title="家庭地址" label-width="5em" label-align="left">
      <cell title="省份" v-model="poorFamily.province" ></cell>
      <cell title="市区" v-model="poorFamily.city" ></cell>
      <cell title="乡镇" v-model="poorFamily.county" ></cell>
      <x-textarea title="详细地址" v-model="poorFamily.detailAddress"  :show-counter="false" readonly
                  :rows="2"></x-textarea>
    </group>

    <group title="业务信息" label-width="5em" label-align="left">
      <cell title="标题" v-model="poorFamily.title"></cell>
      <x-textarea title="详细信息" v-model="poorFamily.content" readonly :show-counter="false"
                  :rows="4"></x-textarea>

    </group>
    <group title="处理进度" label-width="5em" label-align="left">
      <cell title="状态" :value="statusDesc"></cell>
      <cell title="办理时间" :value="formateTime"></cell>
      <cell title="修改时间" v-if="formateTime !== updateTime" :value="updateTime"></cell>
      <x-textarea v-if="poorFamily.status !== 0" title="回复信息" v-model="poorFamily.reply" readonly
                  :show-counter="false"
                  :rows="4"></x-textarea>

    </group>

    <box gap="10px 10px">
      <flexbox>
        <flexbox-item v-if="poorFamily.status !== 2">
          <x-button type="primary" @click.native="edit">修改</x-button>
        </flexbox-item>
        <flexbox-item v-if="poorFamily.status !== 2">
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
        return this.poorFamily.createTime.replace('T', ' ')
      },
      updateTime () {
        return this.poorFamily.updateTime.replace('T', ' ')
      },
      statusDesc () {
        switch (this.poorFamily.status) {
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
        this.$router.push('/poorFamily/list')
      },
      remove () {
        this.$http.post('/poorFamily/deletePoorFamily', this.poorFamily).then(response => {
          if (response.status === 200) {
            this.submitSuccess = true
          }
        })
      },
      edit () {
        this.$router.push({name: 'EditPoorFamily', params: {id: this.poorFamily.id}})
      }
    },
    data () {
      return {
        poorFamily: {
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
      this.$http.get('/poorFamily/getPoorFamily?id=' + id).then(response => {
        if (response.status === 200) {
          this.poorFamily = response.data
        }
      })
    }
  }
</script>
