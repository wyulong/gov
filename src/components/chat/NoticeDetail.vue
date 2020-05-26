<template>
  <div>

    <br>
    <divider>{{detail.title}}</divider>
    <card>
      <div slot="content" class="card-padding">
        <p style="color:#999;font-size:12px;">发布时间：{{detail.createTime}}</p>
        <p style="font-size:14px;line-height:1.2;">{{detail.content}}</p>
      </div>
    </card>
<!--
        <x-button type="default" @click.native="back" >返回</x-button>
-->
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
        this.$router.push('/service')
      }
    },
    data () {
      return {
        detail: {},
        submitSuccess: false
      }
    },
    mounted () {
      let id = this.$route.params.id
      this.$http.get('/notice/getNotice?id=' + id).then(response => {
        if (response.code === 0) {
          this.detail = response.data
        }
      })
    }
  }
</script>
