<template>
  <div>
    <h5>LevelThree组件 --- {{ color }} --- {{ count }}</h5>
  </div>
</template>

<script>
// import bus from './eventBus.js'
export default {
  name: 'MyLevelThree',
  // data() {
  //   return {
  //     color: ''
  //   }
  // },
  // created() {
  //   bus.on('colorChange', (color) => {
  //     this.color = color
  //   })
  // }
  // 子孙组件接收数据
  inject: ['color', 'count']
}
</script>

<style lang="less" scoped></style>
