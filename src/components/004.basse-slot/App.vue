<template>
  <div>
    <h1>App组件</h1>
    <hr />
    <MyCom>
      <!-- <p>这个是使用插槽插入的内容</p> -->
      <!-- <img src="../../assets/logo.png" alt="" /> -->
    </MyCom>
  </div>
</template>

<script>
import MyCom from './MyCom.vue'
export default {
  components: { MyCom },
  name: 'App'
}
</script>

<style lang="less" scoped></style>
