<template>
  <div>
    <h3>Watch 侦听器的用法</h3>
    <input type="text" v-model.trim="info.username" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MyWatch',
  data() {
    return {
      username: 'admin',
      info: {
        username: 'zs'
      }
    }
  },
  watch: {
    // 侦听器不会立即调用
    // async username(newVal, oldVal) {
    //   const { data: res } = await axios.get(
    //     'https://www.escook.cn/api/finduser' + newVal
    //   )
    //   console.log(res)
    // }

    // username: {
    //   async handler(newVal, oldVal) {
    //     const { data: res } = await axios.get(
    //       'https://www.escook.cn/api/finduser' + newVal
    //     )
    //     console.log(res)
    //   },
    //   // 立即触发 watch 侦听器
    //   immediate: true
    // }

    info: {
      async handler(newVal) {
        const { data: res } = await axios.get(
          'https://www.escook.cn/api/finduser' + newVal
        )
        console.log(res)
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped></style>
