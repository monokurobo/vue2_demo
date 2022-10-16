import Vue from "vue"

export default {
    install(vue){
        console.log("🚀 -------------------------------------------------🚀")
        console.log("🚀 ~ file: plugin.js ~ line 3 ~ install ~ vue")
        console.log("🚀 -------------------------------------------------🚀")
        
        // 全局过滤器
		Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		})


        // 定义全局指令
		Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		})

        // 定义混入
        Vue.mixin({
            data() {
                return {
                  name: '尚硅谷',
                  address: '北京'
                }
              }
        })

        // 给 vue 原型上添加方法
        Vue.prototype.hello = ()=>{alert('hello')}
    }
}