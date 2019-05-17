<template>
  <div id="app">
   
    <router-view/>
   
  <h1>{{ msg }}</h1>
  
  </div>
 
</template>

<script>
import hello from './components/HelloWorld'
import asp from './components/Test'
export default {
  name: 'App',
  data() {
      return {
          msg:"Hello VUE !"
      }
  },
  comments:{
      hello,asp
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
}
</style>
