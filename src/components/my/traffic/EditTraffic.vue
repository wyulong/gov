<template>
  <div>
    <group title="车辆信息" label-width="5em" label-align="left">
      <x-input title="车牌号" v-model="traffic.carNumber" placeholder="请填写车牌号"></x-input>
    </group>
    <group title="业务信息" label-width="5em" label-align="left">
      <x-input title="标题" v-model="traffic.title" placeholder="请填写标题"></x-input>
      <x-textarea title="详细信息" v-model="traffic.content" placeholder="请填写详细信息" :show-counter="false"
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
        this.$router.push({name: 'TrafficDetail', params: {id: this.traffic.id}})
      },
      submit () {
        console.log('submit')
        this.$http.post('/traffic/editTraffic', this.traffic).then(response => {
          if (response.code === 0) {
            this.submitSuccess = true
          }
        })
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
          reply: ''
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
