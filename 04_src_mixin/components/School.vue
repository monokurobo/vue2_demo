<template>
  <div>
    <h2 @click="showName">学校:{{name}}</h2>
    <h2>地址:{{address}}</h2>
  </div>
</template>

<script>
  import {mixin} from '../mixin.js';
  export default {
    name: 'school',
    data() {
      return {
        name: '尚硅谷',
        address: '北京'
      }
    },
    mixins: [mixin]
  }
</script>

<style>

</style>