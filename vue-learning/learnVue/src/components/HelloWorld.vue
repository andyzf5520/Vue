<template>
  <div class="hello">
    
    <h1>{{ msg }}</h1>
    <h2></h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs 公共组件区
        </a>
     
      </li>
    
    </ul>
     <router-link to="/" >首页</router-link>
      <footernav></footernav>
  </div>
 
 
</template>

<script>
import footernav from './footer'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    footernav
  },
 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
