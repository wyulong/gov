<template>
  <div>
    <group title="家庭地址" label-width="5em" label-align="left">
      <x-input title="省份" v-model="poorFamily.province" placeholder="请填写省份"></x-input>
      <x-input title="市区" v-model="poorFamily.city" placeholder="请填写市区"></x-input>
      <x-input title="乡镇" v-model="poorFamily.county" placeholder="请填写乡镇"></x-input>
      <x-textarea title="详细地址" v-model="poorFamily.detailAddress" placeholder="请填写详细地址" :show-counter="false"
                  :rows="2"></x-textarea>
    </group>
    <group title="业务信息" label-width="5em" label-align="left">
      <x-input title="标题" v-model="poorFamily.title" placeholder="请填写标题"></x-input>
      <x-textarea title="详细信息" v-model="poorFamily.content" placeholder="请填写详细信息" :show-counter="false"
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
        this.$router.push('/service')
      },
      submit () {
        console.log('submit')
        this.$http.post('/poorFamily/addPoorFamily', this.poorFamily).then(response => {
          if (response.status === 200) {
            this.submitSuccess = true
          }
        })
      },
      onHide () {
        this.$router.push('/service')
      }
    },
    data () {
      return {
        poorFamily: {
          school: '',
          schoolYear: 2020,
          major: '',
          title: '',
          content: ''
        },
        submitSuccess: false
      }
    }
  }
</script>

