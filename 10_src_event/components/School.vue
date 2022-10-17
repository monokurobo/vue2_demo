<template>
  <div class="school">
    <h2>学校:{{name}}</h2>
    <h2>地址:{{address}}</h2>
    <button @click="sendSchoolName">通过 props 给 APP 发送学校名称</button>
  </div>
</template>

<script>
  export default {
    name: 'school',
    props: ['getSchoolName'],
    data() {
      return {
        name: '尚硅谷123456',
        address: '北京'
      }
    },
    methods: {
      sendSchoolName(){
        this.getSchoolName(this.name)
      }
    }
  }
</script>

<style scoped>
.school {
  padding: 20px;
  background: rgb(54, 56, 162);
}
</style>