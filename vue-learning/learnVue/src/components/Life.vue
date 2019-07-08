
<template>
    <div>
        <title>生命钩子函数</title>
        <hr>
        <input type="text" ref="name" v-model="txtval" value="updated 钩子函数值改变">
         <button @click="updateval()">改变值触发Updated</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            txtval:"",
        }
    },
    methods:{
    updateval(){
        
        }
    },
     // 钩子函数生命周期
  beforeCreate(){  //vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。, 加loading事件

    console.log('==============' + 'beforeCreated' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  //vue实例的数据对象data有了，$el还没有  ,结束loading、请求数据为mounted渲染做准备
  created(){
    console.log('==============' + 'created' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  // vue实例的$el和data都初始化了，但还是虚拟的dom节点，具体的data.filter还未替换。
  beforeMount(){
    console.log('==============' + 'beforeMount' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  //vue实例挂载完成，data.filter成功渲染  , 配合钩子路由使用
  mounted(){
    console.log('==============' + 'mounted' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  // 数据data 更新时候触发 
  beforeUpdate(){
    console.log('==============' + 'beforeUpdate' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
     console.log("update之前的值："+this.txtval)
   
  },
  //数据data 更新时候触发 ，也可以进行Wactching
  updated(){
    console.log('==============' + 'updated' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
     console.log("修改之后值："+this.txtval)
   
  },
  beforeDestroy(){
 console.log('==============' + 'beforeDestroy' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
      console.log("beforeDestroy之前"+":"+ this.$refs.name.values)
  },
  destroyed(){
    console.log('==============' + 'destroyed' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
}
</script>
