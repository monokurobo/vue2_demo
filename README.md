# [尚硅谷-Vue.js从入门到精通(B站)-学习记录](https://www.bilibili.com/video/BV1Zy4y1K7SH/?spm_id_from=333.999.0.0&vd_source=8eab7402e9d77f02c15aaa5314543110)

## 目录说明

* 00_html 文件夹,为非脚手架环境代码
* xx_src_xxx 文件夹,为脚手架环境下的 src 文件夹,修改为 src 即可使用

## ref指令

    1.id 的替代
    2.在标签上,获得的是 dom 元素;在组件上,获得的是 VueComponent 对象实例.
    3.使用方式:
        标记: <h1 ref="xxx" ></h1>
        获取: this.#refs.xxx

## props : 让组件接收外部传入的数据

    1.传递数据
        <Demo name="xxxx"/>
        注: number 类型, 用 ' :age="18" '
    2.接收数据
        // 简单接收
        props:['name','address','amount'] 
        // 限制类型
        props:{
            name: String
        }
        // 限制类型 和 必要性
        props:{
            name: {
                type: String,
                required: true  // 必传
            }
            amount: {
                type: String,
                default: 0 // 默认值, 和 required 不同时出现
            }
        }
        注: props 只读

## mixin : 把多个组件共用的配置提前到一个混合对象

    定义:
        {
            data(){...},
            methods:{...},
            ...
        }
    使用:
        全局:Vue.mixin(mixin)
        局部:
          import {mixin} from '../mixin.js';
            export default {
                mixins: [mixin],
            }

## plugin : 增强 vue

    本质: 包含 install 方法的一个对象, install(vue,插件使用者传染地的数据)
    定义:
        obj.install = function (Vue, options){
           
            Vue.filter(...) // 全局过滤器
            
            Vue.directive(...)  // 定义全局指令
            
            Vue.mixin(...)  // 定义混入
            
            Vue.prototype.hello = xxx   // 给 vue 原型上添加方法
        }
    使用: Vue.use(plugin)

## scoped : 让样式局部生效,防止冲突

    <style scoped></style>
