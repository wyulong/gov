<template>
  <div>
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  name: 'test',
  components: {
    Group,
    Cell
  }
}
</script>