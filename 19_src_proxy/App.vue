<template>
  <div id="root">
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      msg: 'Hello, TODOLIST',
    }
  },
  methods:{
    getStudents () {
      axios.get('http://localhost:8080/students').then(
        response => {
          console.log(response.data)
        }, 
        err => {
          console.log(err.message)
        })
    }
  }
}
</script>
