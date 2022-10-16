<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <School></School>
    <hr/>
    <Student></Student>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {
    School,
    Student
  },
  data () {
    return {
      msg: 'Hello, scoped'
    }
  }
}
</script>

//scoped app.vue 放公共样式,不建议写 scooped
//lang="less" 需要配合 less-loader
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
