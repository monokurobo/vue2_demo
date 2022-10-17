<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <!-- 通过 props  -->
    <School :getSchoolName="getSchoolName"></School>
    <hr/>
    <!-- 通过 自定义事件: 方式一: v-on 或 @  与 $emit -->
    <Student v-on:getStudentName="getStudentName" @event1="hendleEvent1"></Student>
    <hr/>
    <!-- 通过 自定义事件: 方式二: $ref.xxx.$on 与 $emit  -->
    <!-- <Student ref="student"></Student>  -->
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
  },
  methods: {
    getSchoolName (name) {
      console.log("🚀 --------------------------------------------------------🚀")
      console.log("🚀 ~ file: App.vue ~ line 27 ~ getSchoolName ~ name", name)
      console.log("🚀 --------------------------------------------------------🚀")
      
    },
    getStudentName (name,...rest) {
      console.log("🚀 --------------------------------------------------------🚀")
      console.log("🚀 ~ file: App.vue ~ line 27 ~ getStudentName ~ name", name, rest)
      console.log("🚀 --------------------------------------------------------🚀")
      
    },
    hendleEvent1(){
      console.log("🚀 event1----------------------------------------------------🚀")
    }
  },
  mounted () {
    setTimeout(() => {
      // this.$refs.student.$on('getStudentName', this.getStudentName);
      // this.$refs.student.$once('getStudentName', this.getStudentName);
    }, 3000);
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
