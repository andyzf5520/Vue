import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import asp from '@/components/Test'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'asp',
            component: asp
        }, {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },


    ]
})