<template>
  <div>
    <group title="咨询信息" label-width="5em" label-align="left">
      <x-input title="问题标题" v-model="consult.title" placeholder="请填写标题"></x-input>
      <x-textarea title="问题描述" v-model="consult.content" placeholder="请填写详细信息" :show-counter="false"
                  :rows="4"></x-textarea>
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
    <toast v-model="submitSuccess" @on-hide="onHide">提交成功</toast>

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
      back () {
        this.$router.push('/consult/list')
      },
      submit () {
        this.$http.post('/consultMessage/addConsultMessage', this.consult).then(response => {
          if (response.code === 0) {
            this.submitSuccess = true
          }
        })
      },
      onHide () {
        this.back()
      }
    },
    data () {
      return {
        consult: {
          carNumber: '',
          title: '',
          content: ''
        },
        submitSuccess: false
      }
    }
  }
</script>
