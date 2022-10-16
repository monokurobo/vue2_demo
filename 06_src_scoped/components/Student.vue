<template>
  <div class="demo">
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
  </div>
</template>

<script>
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

<style scoped>
.demo {
  padding: 20px;
  background: rgb(203, 39, 39)
}
</style>