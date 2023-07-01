<template>
  <div>
    <h3>Son组件 --- {{ num }}</h3>
    <button type="button" class="btn btn-danger" @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MySon',
  //用于接收父组件传递的数据
  props: ['num'],
  //自定义事件
  //自定义事件
  emits: ['update:num'],
  // emits: ['numchange'],

  methods: {
    add() {
      // this.$emit('numchange', this.num + 1)
      this.$emit('update:num', this.num + 1)
    }
  }
}
</script>

<style lang="less" scoped></style>
