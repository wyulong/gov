<template>
  <div>
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
  import {Cell, Group} from 'vux'

  export default {
    name: 'test',
    components: {
      Group,
      Cell
    }
  }
</script>
