import axios from "axios"
import { nanoid } from "nanoid"

export default  {
    namespaced: true,
    // 响应组件中的动作
    actions : {
        addPersonWang(context, value){
            if(value.name.indexOf('王') === 0 ){
                context.commit('ADD_PERSON', value)
            }else{
                alert()
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                res =>{
                    context.commit('ADD_PERSON', {id: nanoid(), name: res.data})
                },
                err =>{
                    console.log(err.message)
                }
            )
        }
    },

    // 操作数据
    mutations : {
        ADD_PERSON(state, value){
            state.personList.unshift(value)
        }
    },

    // 存储数据
    state : {
        personList: [
            {
                id: '1',
                name: '张生'
            }
        ]
    },

    // 将 state 中的数据进行加工
    getters: {
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}