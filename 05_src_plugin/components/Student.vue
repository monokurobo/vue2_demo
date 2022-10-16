<template>
  <div>
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
  //  veronicaJun 2022-10-16 14:43:17
  export default {
    name: 'student',
    data() {
      return {
        name: '张三',
        age: 18
      }
    }
  }
</script>

<style>

</style>