# [尚硅谷-Vue.js从入门到精通(B站)-学习记录](https://www.bilibili.com/video/BV1Zy4y1K7SH/?spm_id_from=333.999.0.0&vd_source=8eab7402e9d77f02c15aaa5314543110)

## 目录说明

* 00_html 文件夹,为非脚手架环境代码
* xx_src_xxx 文件夹,为脚手架环境下的 src 文件夹,修改为 src 即可使用

## 2. ref指令

1. id 的替代
2. 在标签上,获得的是 dom 元素;在组件上,获得的是 VueComponent 对象实例.
3. 使用方式:
    标记: `<h1 ref="xxx" ></h1>`
    获取: `this.#refs.xxx`

## 3. props : 让组件接收外部传入的数据

1. 传递数据

    ```js
    <Demo name="xxxx"/>
    ```

    注: number 类型, 用 ' :age="18" '
2. 接收数据

    ```js
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
    ```

    注: props 只读

## 4. mixin : 把多个组件共用的配置提前到一个混合对象

定义:

```js
{
    data(){...},
    methods:{...},
    ...
}
```

使用:

```js
//全局
Vue.mixin(mixin)
//局部
import {mixin} from '../mixin.js';
export default {
    mixins: [mixin],
}
```

## 5. plugin : 增强 vue

本质: 包含 install 方法的一个对象, install(vue,插件使用者传染地的数据)
定义:

```js
obj.install = function (Vue, options){
    
    Vue.filter(...) // 全局过滤器
    
    Vue.directive(...)  // 定义全局指令
    
    Vue.mixin(...)  // 定义混入
    
    Vue.prototype.hello = xxx   // 给 vue 原型上添加方法
}
```

使用:
`Vue.use(plugin)`

## 6. scoped : 让样式局部生效,防止冲突

```js
<style scoped>
</style>
```

## 7. TODOLIST 案例

1. 组件化编码流程:
    1. 拆分静态组件: 按照功能点拆分, 命名不要与 `html` 元素冲突
    2. 实现动态组件: 通用数据放在父组件中(状态提升), 非通用数据放在组件自身中
    3. 实现交互: 从绑定事件监听开始

2. `props` 适用于:
    1. 父组件 ==> 子组件 通信
    2. 子组件 ==> 父组件 通信 (父给子一个函数)

3. 使用 `v-modal` 时, 不能绑定 `props`

4. `props` 是对象类型时, 修改对象中的属性, vue 不会报错, 不建议修改

## 10. 自定义事件 : 组件间通信方式, 适用于 子 ===> 父

1. 事件回调在 父组件 中
2. 绑定方式:
    1. 方式一: 父组件 中使用 `v-on` 或 `@`

    ```js
    <Student v-on:getStudentName="getStudentName" 
            @event1="hendleEvent1">
            </Student>
    ```

    2. 方式二: 父组件 中使用 `$ref.xxx.$on`

    ```js
    <Student ref="student"></Student>
    ```

    注: 若只触发一次,使用 once 或 $once 修饰符

3. 触发: `this.$emit('event',param1,param2,param3)`
4. 解绑: `this.$off()` / `this.$off('event')` / `this.$off(['event1', 'event2', 'event3'])`
5. 组件上绑定原生事件, 需要使用 native 修饰符
注: 使用 `this.$refs.xxx.$on` 时, 回调函数的作用域, 建议回调卸载 `methods` 中, 使用匿名函数写成箭头函数

## 12. 全局数据总线 GlobalEventBus : 组件间通信方式, 适用于 任意组件间

安装数据总线

```js
new Vue({
    ...
    beforeCreate () {
        Vue.prototype.$bus = this
    }
}).$mount('#app')
```

接收数据:

```js
methods:{
    reseiveData(data) {
        ...
    }
},
mounted(){
    this.$bus.$on('event', this.receiveData)
}
```

发送数据:

```js
methods:{
    sendData(data) {
        this.$bus.$emit('event', data)
    }
}
```

注: 最好在  beforeDestroy 中 解绑

## 14. 消息订阅与发布 pubsub : 组件间通信方式, 适用于 任意组件间

安装: `npm i pubsub-js`
引入: `import pubsub from "pubsub-js"`
接收数据:

```js
methods:{
    reseiveData(data) {
        ...
    }
},
mounted(){
    this.pubid = pubsub.subscribe('event', this.receiveData)
},
destory(){
    pubsub.unsubscribe(this.pubid)
}
```

发送数据:

```js
methods:{
    sendData(data) {
        pubsub.publish('event', data)
    }
}
```

注: 在 Vue 中, 使用 GlobalEventBus

## 16. nextick

语法: `this.$nextick(function)`
作用: 下一次DOM 更新结束后执行指定回调
时机: 当改变数据后, 需要对更新后的 DOM 进行操作

## 17. Vue 封装的过渡与动画

作用: 在插入/更新/移除元素时, 在合适的时机给元素添加上样式类名
使用:
    1. 准备好样式: `v-enter`,`v-leave-to`,`v-enter-to`,`v-leave`,`v-enter-active`,`v-leave-active`
    2. 使用 `transition` 包裹元素, 并配置 `name`
注: 多个元素使用 `transition-group`, 并且每个元素需要配置 `key`

## 19. Vue-cli 的服务代理 : vue.config.js中配置

1. 方式一

    ```js
    devServer: {
        proxy: 'http://localhost:5000'
    }
    ```

    缺点: 不能配置多个, 不能指定是否代理
2. 方式二

    ```js
    devServer: {
        proxy: {
            '/api': {   //匹配以 /api 开头的请求路劲
                target: 'http://localhost:5000',
                changeOrigin: true, //是否如实告知对方代理服务器的端口号
                pathRewrite: { '^/api': '' }  //将添加的/api前缀删除
            }
        }
    }
    ```

    缺点: 请求资源时必须加前缀

## 22. slot : 让 父组件 可以向 子组件 指定的位置插入 html 结构

1.默认插槽

```js
//父组件
<Category title="美食">
    <img src="" alt="img">
</Category>
```

```js
//子组件
<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot></slot>
    </div>
</template>
```

具名插槽

```js
//父组件
<Category title="美食">
    <a slot="slot" href="">更多美食</a>
</Category>
```

```js
//子组件
<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot name="slot"></slot>
    </div>
</template>
```

作用域插槽: 父组件决定结构, 子组件决定数据

```js
//父组件
<Category title="游戏">
    <template scope="data">
        <ul>
        <li v-for="(item,index) in data.games" 
        :key="index">{{item}}</li>
        </ul>
    </template>
</Category>

<Category title="游戏">
<template slot-scope={games}>
    <h4 v-for="(item,index) in games" 
    :key="index">{{item}}</h4>
</template>
</Category>
```

```js
//子组件: 数据 games 在子组件中
<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :games="games"></slot>
    </div>
</template>
```
