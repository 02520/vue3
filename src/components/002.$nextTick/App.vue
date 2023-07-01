<template>
  <div>
    <h1>App组件</h1>
    <hr />
    <input type="text" class="form-control" v-if="inputVisible" ref="iptRef" />
    <button type="button" v-else class="btn btn-primary" @click="showInput">
      展示 input 输入框
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyApp',
  data() {
    return {
      inputVisible: false
    }
  },
  methods: {
    showInput() {
      this.inputVisible = true

      this.$nextTick(() => {
        console.log(this.$refs.iptRef)
        this.$refs.iptRef.focus()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.form-control {
  width: 280px;
  display: inline;
  vertical-align: bottom;
}
</style>
