<template>
  <div>
    <h1 ref="myh1">App组件</h1>
    <hr />
    <button type="button" class="btn btn-primary" @click="getRefs">
      获取 $refs 引用
    </button>
    <MyCounter ref="counterRef"></MyCounter>
  </div>
</template>

<script>
import MyCounter from './Counter.vue'

export default {
  name: 'App',
  components: { MyCounter },
  methods: {
    getRefs() {
      this.$refs.myh1.style.color = 'red'
      console.log(this.$refs.counterRef)
    }
  }
}
</script>

<style lang="less" scoped></style>
