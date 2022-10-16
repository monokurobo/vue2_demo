<template>
  <div id="app">
    <h1 v-text="msg" ref="h1"></h1>
    <button @click="shwoDom">点我输入 dom</button>
    <School></School>
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
      msg: 'Hello ref'
    }
  },
  methods: {
    shwoDom () {
      console.log('Hello ref',this.$refs.h1);
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
