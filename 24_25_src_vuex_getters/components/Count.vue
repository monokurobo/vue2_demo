<template>
  <div>
    <h1>当前求和为{{$store.state.sum}}</h1>
    <h2>当前求和放大 10 倍为{{$store.getters.bigSum}}</h2>

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
        }
      },
      methods: {
        increment () {
          this.$store.commit('JIA',this.n)
        },
        decrement () {
          this.$store.commit('JIAN',this.n)
        },
        incrementOdd () {
          this.$store.dispatch('jianOdd',this.n)
        },
        incrementWait () {
          this.$store.dispatch('jianWait',this.n)
        }
      }
}
</script>

<style>
button {
  margin-left: 5px;
}
</style>