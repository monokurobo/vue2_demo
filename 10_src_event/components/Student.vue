<template>
  <div class="student">
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <button @click="sendStudentName">通过 自定义事件 给 APP 发送学生姓名</button>
    <button @click="unbindSendStudentNameEvent">解绑事件</button>
    <button @click="destroySelf">销毁 student 实例对象</button>
  </div>
</template>

<script>
  export default {
    name: 'student',
    data() {
      return {
        name: '张三',
        age: 18
      }
    },
    methods: {
      sendStudentName() {
        this.$emit('getStudentName',this.name,111,222,333)
        // this.$emit('event1')
      },
      unbindSendStudentNameEvent() {
        this.$off('getStudentName') //解绑一个事件
        // this.$off(['getStudentName','event1']) //解绑多个事件
        // this.$off() //解绑全部事件
      },
      destroySelf(){
        this.$destroy()
        //销毁后,绑定的自定义事件全部失效
      }
    }
  }
</script>

<style scoped>
.student {
  padding: 20px;
  background: rgb(203, 39, 39)
}
</style>