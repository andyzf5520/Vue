<template>
  <div id="app">
    
    <router-view/>
   
  <h1>{{ msg }}</h1>
  
  </div>
 
</template>

<script>
import hello from './components/HelloWorld'
import test from './components/Test'
export default {
  name: 'App',
  data() {
      return {
          msg:"根组件内容是 Login.Vue ( #App1 )  main中的</login> 组件!"
      }
  },
  comments:{
      hello,test  
  },
  mounted() {
      
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: blanchedalmond;
}
</style>
