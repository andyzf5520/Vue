// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import login from "./Login" // 引入组件


// 引用调用组件 1.main入口引用组件并命名 ./指代当前src 代码目录
Vue.config.productionTip = false
import axios from 'axios' // 1、在这里引入axios
Vue.prototype.$axios = axios // 2、在vue中使用axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App, login }, // 
    // template: '<App/>'
    template: '<login/>' // 此处不添加将不显示 指定模板(渲染的页面)
})