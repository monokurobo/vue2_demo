<template>
  <div class="school">
    <h2>学校:{{name}}</h2>
    <h2>地址:{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'school',
    data() {
      return {
        name: '尚硅谷123456',
        address: '北京'
      }
    },
    methods: {
      sendStudentName(name){
      console.log("🚀 -------------------------------------------------------------🚀")
      console.log("🚀 ~ file: School.vue ~ line 19 ~ sendStudentName ~ name", name)
      console.log("🚀 -------------------------------------------------------------🚀")

      }
    },
    mounted() {
      this.$bus.$on('sendStudentName',this.sendStudentName)
    }
  }
</script>

<style scoped>
.school {
  padding: 20px;
  background: rgb(54, 56, 162);
}
</style>