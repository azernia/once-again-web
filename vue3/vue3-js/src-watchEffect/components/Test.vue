<template>
  <h2>当前求和为:{{sum}}</h2>
  <button @click="sum++">click plus</button>
  <hr>
  <h2>当前信息:{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>{{Person.name}}</h2>
  <h2>{{Person.age}}</h2>
  <h2>{{Person.job.j1.salary}}</h2>
  <button @click="Person.name += '!'">modify name</button>
  <button @click="Person.age++">add age</button>
  <button @click="Person.job.j1.salary+=1000">add salary</button>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue';

export default {
  name: 'Test',

  setup () {
    const sum = ref(0);
    const msg = ref('你好');
    const Person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 30000
        }
      }
    });

    // watchEffect 不明确的指定监视对象，回调中用到谁监视谁
    watchEffect(() => {
      console.log(sum.value);
      console.log(Person.job.j1.salary);
    });

    return {
      sum,
      msg,
      Person
    };
  }
};
</script>

<style scoped>

</style>
