<template>
  <div>
    <h1>App组件</h1>
    <hr />
    <MyTest>
      <template v-slot:default="{ msg, info }">
        <p>{{ msg }}</p>
        <p>{{ info.address }}</p>
        <p>{{ info.phone }}</p>
      </template>
    </MyTest>
    <hr />
    <MyTable>
      <template #default="{ user }">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>
          <input type="checkbox" :checked="user.state" />
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './MyTable.vue'
import MyTest from './MyTest.vue'
export default {
  components: {
    MyTable,
    MyTest
  },
  name: 'App'
}
</script>

<style lang="less" scoped></style>
