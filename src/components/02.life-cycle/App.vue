<template>
  <div>
    <h1>App组件</h1>
    <hr />
    <button @click="flag = !flag">显示/隐藏LifeCycle</button>

    <LifeCycle v-if="flag"></LifeCycle>
  </div>
</template>

<script>
import LifeCycle from './LifeCycle.vue'
export default {
  components: { LifeCycle },
  data() {
    return {
      flag: true
    }
  },
  name: 'MyApp'
}
</script>

<style lang="less" scoped></style>
