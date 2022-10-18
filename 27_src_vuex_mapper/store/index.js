// 创建 vuex store
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

// 响应组件中的动作
const actions = {
    jia(context, value){
        context.commit('JIA', value)
    },
    jian(context, value){
        context.commit('JIAN', value)
    },
    jiaOdd(context, value){
        if(context.state.sum % 2){
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value){
        setTimeout(() => {
            context.dispatch('jia', value)
        },500)
    }
}

// 操作数据
const mutations = {
    JIA(state, value){
        state.sum += value
    },
    JIAN(state, value){
        state.sum -= value
    }
}

// 存储数据
const state = {
    sum: 0 , //当前的和
    school: '尚硅谷',
    subject: '前端',
}

// 将 state 中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}


export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})