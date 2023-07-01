<template>
  <div>
    <h1>App组件</h1>
    <!-- <input type="text" class="form-control" v-focus /> -->

    <hr />
    <MyHome></MyHome>
  </div>
</template>

<script>
import MyHome from './Home.vue'
export default {
  components: { MyHome },
  name: 'App'
}
</script>

<style lang="less" scoped></style>
