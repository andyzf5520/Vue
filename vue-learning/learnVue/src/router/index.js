import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/Test'

import Index from '@/views/index/index'
import Manage from "@/views/manage/index"
Vue.use(Router)

export default new Router({
    routes: [


        {
            path: '/test',
            name: 'test',
            component: test
        },
        {
            path: '/',
            name: 'Index',
            component: Index // 首页组件 带'/' 为显示默认首页
        },
        {
            path: '/main_helloworld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: "/manage",
            name: "Manage",
            component: Manage
        }


    ]
})