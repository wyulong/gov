<template>
  <div>
    <group title="教育信息" label-width="5em" label-align="left">
      <cell title="学校" v-model="graduate.school"></cell>
      <cell title="学年" v-model="graduate.schoolYear"></cell>
      <cell title="专业" v-model="graduate.major"></cell>
    </group>
    <group title="业务信息" label-width="5em" label-align="left">
      <cell title="标题" v-model="graduate.title"></cell>
      <x-textarea title="详细信息" v-model="graduate.content" readonly :show-counter="false"
                  :rows="4"></x-textarea>

    </group>
    <group title="处理进度" label-width="5em" label-align="left">
      <cell title="状态" :value="statusDesc"></cell>
      <cell title="办理时间" :value="formateTime"></cell>
      <cell title="修改时间" v-if="formateTime !== updateTime" :value="updateTime"></cell>
      <x-textarea v-if="graduate.status !== 0" title="回复信息" v-model="graduate.reply" readonly
                  :show-counter="false"
                  :rows="4"></x-textarea>

    </group>

    <box gap="10px 10px">
      <flexbox>
        <flexbox-item v-if="graduate.status !== 2">
          <x-button type="primary" @click.native="edit">修改</x-button>
        </flexbox-item>
        <flexbox-item v-if="graduate.status !== 2">
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
        return this.graduate.createTime.replace('T', ' ')
      },
      updateTime () {
        return this.graduate.updateTime.replace('T', ' ')
      },
      statusDesc () {
        switch (this.graduate.status) {
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
        this.$router.push('/graduate/list')
      },
      remove () {
        this.$http.post('/graduate/deleteGraduate', this.graduate).then(response => {
          if (response.status === 200) {
            this.submitSuccess = true
          }
        })
      },
      edit () {
        this.$router.push({name: 'EditGraduate', params: {id: this.graduate.id}})
      }
    },
    data () {
      return {
        graduate: {
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
      this.$http.get('/graduate/getGraduate?id=' + id).then(response => {
        if (response.status === 200) {
          this.graduate = response.data
        }
      })
    }
  }
</script>
