<template>
  <div class="student">
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <button @click="sendStudentName">点我 发送 学生姓名 给 school</button>
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
    },
    methods: {
      sendStudentName() {
        this.$bus.$emit('sendStudentName', this.name)
      }
    }
  }
</script>

<style scoped>
.student {
  padding: 20px;
  background: rgb(203, 39, 39)
}
</style>