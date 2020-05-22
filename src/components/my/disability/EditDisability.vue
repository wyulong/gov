<template>
  <div>
    <group title="家庭地址" label-width="5em" label-align="left">
      <x-input title="省份" v-model="disability.province" placeholder="请填写省份"></x-input>
      <x-input title="市区" v-model="disability.city" placeholder="请填写市区"></x-input>
      <x-input title="乡镇" v-model="disability.county" placeholder="请填写乡镇"></x-input>
      <x-textarea title="详细地址" v-model="disability.detailAddress" placeholder="请填写详细地址" :show-counter="false"
                  :rows="2"></x-textarea>
    </group>
    <group title="业务信息" label-width="5em" label-align="left">
      <x-input title="标题" v-model="disability.title" placeholder="请填写标题"></x-input>
      <x-textarea title="详细信息" v-model="disability.content" placeholder="请填写详细信息" :show-counter="false"
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
        this.$router.push({name: 'DisabilityDetail', params: {id: this.disability.id}})
      },
      submit () {
        console.log('submit')
        this.$http.post('/disability/editDisability', this.disability).then(response => {
          if (response.code === 0) {
            this.submitSuccess = true
          }
        })
      }
    },
    data () {
      return {
        disability: {
          school: '',
          schoolYear: 2020,
          major: '',
          title: '',
          content: '',
          status: 0,
          reply: ''
        },
        submitSuccess: false
      }
    },
    mounted () {
      let id = this.$route.params.id
      this.$http.get('/disability/getDisability?id=' + id).then(response => {
        if (response.code === 0) {
          this.disability = response.data
        }
      })
    }
  }
</script>
