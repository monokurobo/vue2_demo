<template>
  <div>
    <h2>学校:{{name}}</h2>
    <h2>地址:{{address}}</h2>
    <h2>人数:{{nowAmount}}</h2>
    <button @click="nowAmount++">人数+1</button>
  </div>
</template>

<script>
  export default {
    name: 'school',
    // props 传入的 props 值不允许修改 
    // props:['name','address','amount'] // 简单接收

    // 对接收的数据进行限制
    props:{
      name: {
        type: String,
        required: true  // 必传
      },
      address: {
        type: String,
        required: true
      },
      amount: {
        type: String,
        default: 0 // 默认值, 和 required 不同时出现
      }
    },
    data () {
      return {
        nowAmount: this.amount  // React 中是 this.props.amount
      }
    }
  }
</script>

<style>

</style>