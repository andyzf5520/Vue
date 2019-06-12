// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由默认 的路劲
import login from "./Login" // 引入组件


// 引用调用组件 1.main入口引用组件并命名 ./指代当前src 代码目录
Vue.config.productionTip = false
import axios from 'axios' // 1、在这里引入axios
Vue.prototype.$axios = axios // 2、在vue中使用axios

/* eslint-disable no-new */
new Vue({
    el: '#app', // App.vue——[根组件] 就是index.html页面绑定的那个el #app div
    router, // 显示默认页信息设置
    components: { App, login }, // 
    // template: '<App/>' // 根组件  页面显示是根组件和 test组件共同显示的
    template: '<login/>' // 此处不添加将不显示 指定模板(渲染的页面)  login 模板名称必须和组件里的名字一样
})