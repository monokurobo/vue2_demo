<template>
  <div class="school">
    <h2>学校:{{name}}</h2>
    <h2>地址:{{address}}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js"

export default {
  name: 'school',
  data() {
    return {
      name: '尚硅谷123456',
      address: '北京'
    }
  },
  methods: {
    sendStudentName(name,value){
      console.log("🚀 -------------------------------------------------------------------------🚀")
      console.log("🚀 ~ file: School.vue ~ line 21 ~ sendStudentName ~ name,value", name,value)
      console.log("🚀 -------------------------------------------------------------------------🚀")
    }
  },
  mounted() {
    this.pubId = pubsub.subscribe('sendStudentName',this.sendStudentName)
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style scoped>
.school {
  padding: 20px;
  background: rgb(54, 56, 162);
}
</style>