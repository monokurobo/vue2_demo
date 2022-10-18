<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
    <h2>当前求和放大 10 倍为{{bigSum}}</h2>
    <h2>我在{{school}}, 学习{{subject}}</h2>
    <h2>人员列表总人数{{personList.length}}</h2>
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
      ...mapState('CountStore', ['sum', 'school', 'subject', 'personList']),
      ...mapState('PersonStore', ['personList']),

      ...mapGetters('CountStore',['bigSum'])
    },
    methods: {
      ...mapMutations('CountStore',{increment:'JIA',decrement:'JIAN'}),

      ...mapActions('CountStore',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
    }
}
</script>

<style>
button {
  margin-left: 5px;
}
</style>