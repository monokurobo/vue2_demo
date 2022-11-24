// 创建 router
import VueRouter from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'


 const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path: "/home",
            name: "home",
            component: Home,
            meta: {
                title: '主页',
                isAuth: true,   // 需要鉴权
            },
            children: [
                {
                    path: "message",
                    name: "message",
                    component: Message,
                    meta: {
                        title: '消息',
                    },
                    children: [
                        {
                            path: "detail/:id/:title",
                            name: "detail",
                            component: Detail,
                            // props: {a: 1,b:2}
                            props:true // 将所有 params 传入 props
                            // props(route){ // 将所有 query 传入 props
                            //     return {
                            //         id:route.query.id,
                            //         title:route.query.title
                            //     }
                            // }
                        },
                    ]
                },
                {
                    path: "news",
                    name: "news",
                    component: News,
                    meta: {
                        title: '新闻',
                    },
                    beforeEnter: (to, from, next) => {
                        // ...
                        next()
                    }
                    
                }
            ]
        },
        {
            path: "/about",
            name: "about",
            component: About,
            meta: {
                title: '关于',
            },
        }
    ]
})

// 前置路由守卫: 初始化,路由切换前 被调用
router.beforeEach((to, from, next) => {
    if(to.meta.isAuth){
        if (to.name === 'home') {
            if(true){
                next(); //放行
            }
        }
    }else{
        next(); //放行
    }
})

// 后置路由守卫: 初始化,路由切换后 被调用
router.afterEach((to, from) => {
    document.title = to.title;
});

export default router;