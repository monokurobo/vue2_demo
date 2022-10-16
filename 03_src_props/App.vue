<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <School name="尚硅谷" address="北京" :amount="100"></School>
  </div>
</template>

<script>
import School from './components/School'

export default {
  name: 'App',
  components: {
    School
  },
  data () {
    return {
      msg: 'Hello, props'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
