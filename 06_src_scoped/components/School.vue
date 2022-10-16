<template>
  <div class="demo">
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
    }
  }
</script>

<style scoped>
.demo {
  padding: 20px;
  background: rgb(54, 56, 162);
}
</style>