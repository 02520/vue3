<template>
  <div>
    <h3>LifeCycle组件 --- {{ count }}</h3>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  //用于接收父组件传递的数据

  data() {
    return {
      count: 0
    }
  },
  // 组件在内存中被创建了
  created() {
    console.log('Created:组件在内存中被创建了')
  },
  // 组件第一次渲染到页面上
  mounted() {
    console.log('Mmounted:组件第一次渲染到页面上')
  },
  // 组件被重新渲染完毕了
  updated() {
    console.log('Updated:组件被重新渲染完毕了')
  },
  // 组件被销毁完毕了
  unmounted() {
    console.log('unmounted:组件被销毁完毕了')
  }
}
</script>

<style lang="less" scoped></style>
