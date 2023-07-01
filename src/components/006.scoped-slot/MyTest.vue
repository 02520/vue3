<template>
  <div>
    <h3>MyTest组件</h3>
    <slot :info="infomation" :msg="message"></slot>
  </div>
</template>

<script>
export default {
  name: 'MyTest',
  data() {
    return {
      // 信息数据
      infomation: {
        phone: '173xxxx6666',
        address: '中国北京'
      },
      message: 'abc'
    }
  }
}
</script>

<style lang="less" scoped></style>
