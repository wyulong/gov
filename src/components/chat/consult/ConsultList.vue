<template>
  <div>
    <group title="咨询服务">
      <cell :key="consult.id" :title="consult.title" is-link @click.native="showDetail(consult)"
            v-for="consult in consults" value="查看详情"></cell>
    </group>
    <box gap="10px 10px">
      <flexbox>

        <flexbox>
          <flexbox-item>
            <x-button type="default" @click.native="back">返回</x-button>
          </flexbox-item>
          <flexbox-item >
            <x-button type="primary" link="/consult/add">新增</x-button>
          </flexbox-item>
        </flexbox>
      </flexbox>
    </box>

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
      showDetail (consult) {
        this.$router.push({name: 'ConsultMessageDetail', params: {id: consult.id}})
      },
      back () {
        this.$router.push('/chat')
      }
    },
    data () {
      return {
        consults: []
      }
    },
    mounted () {
      this.$http.post('/consultMessage/listConsultMessage').then(response => {
        if (response.code === 0) {
          this.consults = response.data
        }
      })
    }
  }
</script>
