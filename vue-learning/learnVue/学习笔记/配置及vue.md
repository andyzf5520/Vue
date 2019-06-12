# 配置 

+  1. Vue.use()在js方法中用 ,而 export default {} 在 .Vue文件中使用
+ 先通过根页面 index.html  里面 div id="app" border='1' 的空的根节点进行绑定id
+  在main.js 中去配置app并绑定组件引入组件
    
```
 import login from "./Login" // 引入组件

  new Vue({
    el: '#app', // App.vue——[根组件] 就是index.html页面绑定的那个el #app div
    router,
    components: { App, login }, // 
    // template: '<App/>' // 根组件  页面显示是根组件和 test组件共同显示的
    template: '<login/>' // 此处不添加将不显示 指定模板(渲染的页面)  login 模板名称必须和组件里的名字一样
})

```

+ 2. 根组件的内容也就是App.vue 包含所有子组件
+  根组件配置组成及子组件内容位置包含信息 显示如下：
```
  <template>
  <div id="app">
    
    <router-view/>    // 根组件包含的子组件内容 也就是路由配置要显示的默认页内容 ！！！
   
  <h1>{{ msg }}</h1>  // 根组件其他内容
  
  </div>
 
</template>

```

## 路由配置

+  router/index.js中 带'/' 为显示默认首页 
+  根组件配置中  router-view/ 标签代替了上面路由配置的内容组件显示




