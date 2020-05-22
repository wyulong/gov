<template>
  <div>
    <group title="学校信息" label-width="5em" label-align="left">
      <x-input title="学校" v-model="education.school" placeholder="请填写学校"></x-input>
      <x-number title="学年" align="left" v-model="education.schoolYear"
                button-style="round" :min="2010" :max="2020"></x-number>
      <x-input title="专业" v-model="education.major" placeholder="请填写专业"></x-input>
    </group>
    <group title="业务信息" label-width="5em" label-align="left">
      <x-input title="标题" v-model="education.title" placeholder="请填写标题"></x-input>
      <x-textarea title="详细信息" v-model="education.content" placeholder="请填写详细信息" :show-counter="false"
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
        this.$http.post('/education/addEducation', this.education).then(response => {
          if (response.code === 0) {
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
        education: {
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
