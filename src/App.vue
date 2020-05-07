<template>
  <div id="app" style="height:100%;">
    <view-box body-padding-bottom="55px" ref="viewBox">
      <router-view></router-view>
      <tabbar slot="bottom">
        <tabbar-item link="/service" selected>
          <img slot="icon" src="../static/icon/icon.png">
          <img slot="icon-active" src="../static/icon/test.png">
          <span slot="label">微服务</span>
        </tabbar-item>
        <tabbar-item link="/chat">
          <img slot="icon" src="../static/icon/icon.png">
          <img slot="icon-active" src="../static/icon/test.png">
          <span slot="label">微互动</span>
        </tabbar-item>
        <tabbar-item link="/my">
          <img slot="icon" src="../static/icon/icon.png">
          <img slot="icon-active" src="../static/icon/test.png">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem, ViewBox} from 'vux'

  export default {
    name: 'app',
    components: {
      Tabbar,
      TabbarItem,
      ViewBox
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    background-color: #fbf9fe;
  }
</style>
