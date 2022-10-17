<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="h1" appear>
      <h1 v-show="isShow">{{msg}}</h1>
    </transition>
    <transition name="h2" appear>
      <h2 v-show="isShow">{{msg}}</h2>
    </transition>
    <transition-group name="h2" appear>
      <h3 v-show="isShow" key="1">{{msg}}</h3>
      <h3 v-show="isShow" key="2">{{msg}}</h3>
      <h3 v-show="isShow" key="3">{{msg}}</h3>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'test',
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
/* 若 <transition name='trans'></transition>, 则类名为 .trans-enter-active 适用于多个元素有不同的动画效果*/
/* 若 <transition></transition>, 则类名为 .v-enter-active */
/* 动画 */
.h1-enter-active{
  animation: identifier 1s
}
.h1-leave-active{
  animation: identifier 1s reverse
}
@keyframes identifier {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

/* 过渡 */
.h2-enter, .h2-leave-to{
  transform: translateX(-100%);
}
.h2-enter-to, .h2-leave {
  transform: translateX(0);

}
.h2-enter-active, .h2-leave-active {
  transition: 1s;
}

</style>