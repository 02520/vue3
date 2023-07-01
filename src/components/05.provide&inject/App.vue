<template>
  <div>
    <h1>App组件 --- {{ color }}</h1>
    <!-- <input type="text" v-model="color" /> -->
    <button type="button" class="btn btn-primary" @click="color = 'blue'">
      Togglete blue
    </button>
    <!-- <button type="button" class="btn btn-primary" @click="change">
      Togglete blue
    </button> -->
    <hr />
    <LevelTwo></LevelTwo>
  </div>
</template>

<script>
// import bus from './eventBus.js'
import { computed } from 'vue'
import LevelTwo from './LevelTwo.vue'

export default {
  components: { LevelTwo },
  name: 'MyApp',
  data() {
    return {
      color: 'red'
    }
  },
  // methods: {
  //   change() {
  //     this.color = 'blue'
  //     bus.emit('colorChange', this.color)
  //   }
  // }

  //父节点共享数据
  provide() {
    // 返回要功效的数据对象
    return {
      color: computed(() => this.color),
      count: 1
    }
  }
}
</script>

<style lang="less" scoped></style>
