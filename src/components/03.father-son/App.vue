<template>
  <div>
    <h1>App组件 --- {{ count }}</h1>
    <button @click="count += 1" class="btn btn-primary">+1</button>
    <hr />
    <MySon v-model:num="count" @numchange="getNum"></MySon>
  </div>
</template>

<script>
import MySon from './Son.vue'
export default {
  name: 'MyApp',
  data() {
    return {
      count: 0
    }
  },
  components: {
    MySon
  },
  methods: {
    // getNum(val) {
    //   this.count = val
    // }
  }
}
</script>

<style lang="less" scoped></style>
