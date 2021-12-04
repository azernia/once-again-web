<template>
  <div id="app">
    <bb msg="aa999" @eventName="eventName" ref="bb"></bb>
    <div @click="asd">2222</div>
    <div v-for="(item,index) in arr " :key="index">
       <span>{{item.a}}</span>
    </div>
  </div>
</template>

<script>
import bb from './components/HelloWorld'
export default {
  name: 'App',
  data(){
    return  {
     arr:[{a:1,b:"ccc"},{a:2,b:"ddd"}]
    }
  },
  methods:{
    asd(){
      var a = this.$refs['bb'];
      console.log(a.asd)
    },
    eventName(e){
       console.log("11111",e)
     }
  },
  components: {
    bb
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
