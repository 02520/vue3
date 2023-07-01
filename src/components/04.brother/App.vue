<template>
  <div>
    <h1>App组件</h1>
    <hr />

    <div class="brother-box">
      <MyLeft></MyLeft>
      <MyRight></MyRight>
    </div>
  </div>
</template>

<script>
import MyLeft from './Left.vue'
import MyRight from './Right.vue'
export default {
  name: 'MyApp',
  components: {
    MyLeft,
    MyRight
  }
}
</script>

<style lang="less" scoped>
.brother-box {
  display: flex;
  > div {
    border: 1px solid #ccc;
    flex: 1;
    margin: 10px;
    padding: 10px;
    height: 300px;
  }
}
</style>
