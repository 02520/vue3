<template>
  <div>
    <h1>App组件</h1>
    <hr />
    <MyWatch></MyWatch>
  </div>
</template>

<script>
import MyWatch from './MyWatch.vue'
export default {
  components: { MyWatch },
  name: 'MyApp'
}
</script>

<style lang="less" scoped></style>
