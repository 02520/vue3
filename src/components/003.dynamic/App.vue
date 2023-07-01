<template>
  <div>
    <h1 class="mb-4">App组件</h1>
    <button type="button" class="btn btn-primary" @click="conName = 'MyHome'">
      首页
    </button>
    <button type="button" class="btn btn-info" @click="conName = 'MyMovie'">
      电影
    </button>
    <hr />

    <!-- 使用组件 -->
    <!-- <my-home></my-home>
    <my-movie></my-movie> -->
    <keep-alive>
      <component :is="conName"></component>
    </keep-alive>
  </div>
</template>

<script>
import MyHome from './Home.vue'
import MyMovie from './Movie.vue'
export default {
  name: 'MyApp',
  data() {
    return {
      conName: 'MyHome'
    }
  },
  components: {
    MyHome,
    MyMovie
  }
}
</script>

<style lang="less" scoped></style>
