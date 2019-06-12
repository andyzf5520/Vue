<template>
    <div class="footer fiex">
        
        <ul>
            <span> <router-link to="/"> Footer 组件 首页 |</router-link></span>
           <span> <router-link to="/manage">manage 管理 | </router-link></span>
            <span> <router-link to="/test">Test Axios  |</router-link></span>
         
             <span> <router-link to="/main_helloworld">HelloWorld | </router-link></span>
             <button  class="sign" @click="login" >按钮的跳转不是a标签</button>
        </ul>
    </div>
</template>

<script>
export default {
    data:function(){
        return {

        }
    },
    methods: {
        login(){
            // this.$router.push({ path:"/"})
            this.$router.push('/manage') // 填写的是路由配置的路径信息
        }
    },
}
</script>
<style scoped>
     li a{
        
         color: black;
       
         
          width: 100%;
     }
    
  
</style>
