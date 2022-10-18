<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
    <select name="" id="" v-model.number="n">
      <option v-for="item in 3" :key="item" :value="item">{{item}}</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数时加</button>
    <button @click="incrementWait">等一等再加</button>

  </div>
</template>

<script>
export default {
    name: 'Count',
    data () {
        return {
          n: 1, // 用户选择的数字
          sum: 0  //当前的和
        }
      },
      methods: {
        increment () {
          this.sum += this.n
        },
        decrement () {
          this.sum -= this.n
        },
        incrementOdd () {
          if(this.sum % 2){
            this.sum += this.n
          }
        },
        incrementWait () {
          setTimeout(() => {
            this.increment()
          },500)
        }
      }
}
</script>

<style>
button {
  margin-left: 5px;
}
</style>