<template>
  <div>
    <h1>App组件</h1>
    <hr />

    <div class="box">
      <GetInfo></GetInfo>
      <PostInfo></PostInfo>
    </div>
  </div>
</template>

<script>
import PostInfo from './PostInfo.vue'
import GetInfo from './GetInfo.vue'
export default {
  components: {
    PostInfo,
    GetInfo
  },
  name: 'MyApp'
}
</script>

<style lang="less" scoped></style>
