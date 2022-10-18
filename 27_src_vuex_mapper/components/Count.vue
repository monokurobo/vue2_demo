<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
    <h2>当前求和放大 10 倍为{{$store.getters.bigSum}}</h2>
    <h2>我在{{school}}, 学习{{subject}}</h2>

    <select name="" id="" v-model.number="n">
      <option v-for="item in 3" :key="item" :value="item">{{item}}</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数时加</button>
    <button @click="incrementWait(n)">等一等再加</button>

  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    name: 'Count',
    data () {
      return {
        n: 1, // 用户选择的数字
      }
    },
    computed: {
      // 写法一
      //...mapState({sum: 'sum', school: 'school', subject: 'subject'})

      // 写法二
      ...mapState(['sum', 'school', 'subject']),

      ...mapGetters(['bigSum'])
    },
    methods: {
      // increment () {
      //   this.$store.commit('JIA',this.n)
      // },
      // decrement () {
      //   this.$store.commit('JIAN',this.n)
      // },
      ...mapMutations({increment:'JIA',decrement:'JIAN'}),
      // ...mapMutations(['JIA','JIAN']),


      // incrementOdd () {
      //   this.$store.dispatch('jianOdd',this.n)
      // },
      // incrementWait () {
      //   this.$store.dispatch('jianWait',this.n)
      // },
      ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
      // ...mapActions(['jiaOdd','jiaWait'])
    }
}
</script>

<style>
button {
  margin-left: 5px;
}
</style>