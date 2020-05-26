<template>
  <div>
    <div>
      <load-more tip="业务处理实时监督" :show-loading="false" background-color="#fbf9fe"></load-more>
      <x-table :cell-bordered="false" :content-bordered="true" style="background-color:#fff;">
        <thead>
        <tr style="background-color: #F7F7F7">
          <th>业务类型</th>
          <th>未处理</th>
          <th>处理中</th>
          <th>已完成</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>教育服务</td>
          <td>2</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>交通服务</td>
          <td>3</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>社保服务</td>
          <td>3</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>困难家庭</td>
          <td>3</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>毕业生</td>
          <td>3</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>残疾人士</td>
          <td>3</td>
          <td>1</td>
          <td>1</td>
        </tr>
        </tbody>
      </x-table>

      <load-more tip="投诉信息一览" :show-loading="false" background-color="#fbf9fe"></load-more>

      <x-table :cell-bordered="false" :content-bordered="true" style="background-color:#fff;">
        <thead>
        <tr style="background-color: #F7F7F7">
          <th>未处理</th>
          <th>处理中</th>
          <th>已完成</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>5</td>
          <td>1</td>
          <td>1</td>
        </tr>
        </tbody>
      </x-table>
    </div>

    <box gap="10px 10px">
      <flexbox>
        <flexbox>
          <flexbox-item>
            <x-button type="default" link="/chat">返回</x-button>
          </flexbox-item>
        </flexbox>
      </flexbox>
    </box>
  </div>
</template>

<script>
  import {
    XTable,
    LoadMore,
    Group,
    GroupTitle,
    Cell,
    XInput,
    XNumber,
    XTextarea,
    XButton,
    Box,
    Flexbox,
    FlexboxItem, Divider, Toast
  } from 'vux'

  export default {
    components: {
      XTable,
      LoadMore,
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
    }
  }
</script>
