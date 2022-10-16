<template>
  <div>
    <h2 @click="showName">姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
  </div>
</template>

<script>
  import {mixin} from '../mixin.js'; //  局部混合

  export default {
    name: 'student',
    data() {
      return {
        name: '张三',
        age: 18
      }
    },
    mixins: [mixin],
    mounted() {
      console.log('hello, student');
    }
  }
</script>

<style>

</style>