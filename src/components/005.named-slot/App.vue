<template>
  <div>
    <h1>App组件</h1>
    <hr />
    <MyArticle>
      <template #header>
        <h1>滕王阁序</h1>
      </template>
      <template #default>
        <p>豫章故郡,洪都新府</p>
        <p>星分翼轸，地接衡庐。</p>
        <p>襟三江而带五湖，控蛮荆而引瓯越。</p>
      </template>
      <template #footer>
        <p>落款:王勃</p>
      </template>
    </MyArticle>
  </div>
</template>

<script>
import MyArticle from './MyArticle.vue'
export default {
  components: { MyArticle },
  name: 'App'
}
</script>

<style lang="less" scoped></style>
