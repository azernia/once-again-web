<template>
  <h2>{{name}}</h2>
  <!--<h2>{{person.name}}</h2>-->
  <!--<h2>{{person.age}}</h2>-->
  <!--<h2>{{person.job.j1.salary}}</h2>-->
  <!--<button @click="person.name += '!'">modify name</button>-->
  <!--<button @click="person.age++">add age</button>-->
  <!--<button @click="person.job.j1.salary+=1000">add salary</button>-->
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: "Test",

  setup() {
    const person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 30000
        }
      }
    });

    return {
      ...toRefs(person) // 展开
      // person,
      // name: toRef(person, 'name')
    }
  }
}
</script>

<style scoped>

</style>
