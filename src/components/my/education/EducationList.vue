<template>
  <div>
    <group title="教育服务">
      <cell :key="education.id" :title="education.title" is-link @click.native="showDetail(education)"
            v-for="education in educations" value="查看详情"></cell>
    </group>
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
      showDetail (education) {
        this.$router.push({name: 'EducationDetail', params: {id: education.id}})
      }
    },
    data () {
      return {
        educations: []
      }
    },
    mounted () {
      this.$http.post('/education/listEducation').then(response => {
        if (response.code === 0) {
          this.educations = response.data
        }
      })
    }
  }
</script>
