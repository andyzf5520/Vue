import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Axios from '@/components/Axios'

import Index from '@/views/index/index'
import Manage from "@/views/manage/index"
import Login from '@/Login' // 引入组件

import Home from '@/components/home'
import Life from '@/components/Life'
import VueResource from '@/components/VueResource'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
    routes: [


        {
            path: '/axios',
            name: 'Axois',
            component: Axios,

        },
        {
            path: '/VueResource',
            name: 'VueResource',
            component: VueResource,

        },
        {
            path: '/',
            name: 'Index',
            component: Index // 首页组件 带'/' 为显示默认首页 
        },
        {
            path: '/main_helloworld',
            name: 'HelloWorld',
            component: resolve => require(['../components/HelloWorld.vue'], resolve), //直接引用不需要import
            meta: {
                title: "Hellow 首页"
            }
        },
        {
            path: "/manage",
            name: "Manage",
            component: Manage
        },
        {
            path: "/home",
            name: "home",
            component: Home,
        },

        {
            path: '/home1',
            component: Login,
            　　children: [　　　{　　　　 path: '/', 　　　component: Axios }　　]
        },
        {
            path: '/Life',
            name: 'Life',
            component: Life,

        },


    ]
})