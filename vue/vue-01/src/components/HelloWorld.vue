<template>
  <div class="hello">
    <h1>{{ newMsg }}</h1>
    <div @click="aaa">惦记我</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return {
        asd:""
    }
  },
  computed:{
     newMsg:{
       get(){
         return this.msg
       },
       set(){

       }
     }
  },
  methods:{
    aaa(){

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
