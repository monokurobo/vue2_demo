// 创建 router
import VueRouter from "vue-router";
import Home from '../components/Home.vue'
import About from '../components/About.vue'

export default new VueRouter({
    routes:[
        {
            path: "/home",
            name: "home",
            component: Home
        },
        {
            path: "/About",
            name: "About",
            component: About
        }
    ]
})