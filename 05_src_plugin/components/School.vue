<template>
  <div>
    <h2>学校:{{name | mySlice}}</h2>
    <h2>地址:{{address}}</h2>
    <button @click="hello">点我测试一下插件上的 hello 方法</button>
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

<style>

</style>