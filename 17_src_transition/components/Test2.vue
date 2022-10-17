<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear 
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow">{{msg}}</h1>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'test2',
  data () {
    return {
      msg: 'hello transrans',
      isShow: true
    }
  }
}
</script>

<style scoped>
h1{
    background-color: orange;
}
h2{
    background-color: rgb(22, 156, 122);
}
h3{
    background-color: rgb(32, 73, 176);
}

</style>