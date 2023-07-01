<template>
  <div>
    <h3>LevelTwo组件</h3>
    <hr />
    <LevelThree></LevelThree>
  </div>
</template>

<script>
import LevelThree from './LevelThree.vue'
export default {
  components: { LevelThree },
  name: 'MyLevelTwo'
}
</script>

<style lang="less" scoped></style>
