export default  {
    namespaced: true,
    // 响应组件中的动作
    actions : {
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
    },

    // 操作数据
    mutations : {
        JIA(state, value){
            state.sum += value
        },
        JIAN(state, value){
            state.sum -= value
        },
    },

    // 存储数据
    state : {
        sum: 0 , //当前的和
        school: '尚硅谷',
        subject: '前端',

    },

    // 将 state 中的数据进行加工
    getters : {
        bigSum(state){
            return state.sum * 10
        }
    }
}