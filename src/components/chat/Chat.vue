<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <x-button @click.native="showPosition()" type="primary">Top</x-button>

  </div>
</template>

<script>
import { Toast, Group, XSwitch, XButton } from 'vux'
export default {
  components: {
    Toast,
    Group,
    XSwitch,
    XButton
  },
  name: 'Service',
  data () {
    return {
      msg: 'Welcome to Chat'
    }
  },
  methods: {
    showPosition () {
      this.$http.get("/get").then(data => console.log(data))
    }
  }
}
</script>