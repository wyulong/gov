<template>
  <div>
    <group title="投诉中心">
      <cell :key="complain.id" :title="complain.title" is-link @click.native="showDetail(complain)"
            v-for="complain in complains" value="查看详情"></cell>
    </group>
    <box gap="10px 10px">
      <flexbox>

        <flexbox>
          <flexbox-item>
            <x-button type="default" @click.native="back">返回</x-button>
          </flexbox-item>
          <flexbox-item >
            <x-button type="primary" link="/complain/add">新增</x-button>
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
      showDetail (complain) {
        this.$router.push({name: 'ComplainMessageDetail', params: {id: complain.id}})
      },
      back () {
        this.$router.push('/chat')
      }
    },
    data () {
      return {
        complains: []
      }
    },
    mounted () {
      this.$http.post('/complainMessage/listComplainMessage').then(response => {
        if (response.code === 0) {
          this.complains = response.data
        }
      })
    }
  }
</script>
