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
import { reactive, ref, watch } from 'vue';

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

    // 监视 ref 定义的一个响应式数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // });
    // 监视 ref 定义的多个响应式数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // });
    // watch(msg, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // });
    // watch([sum, msg], (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // });
    // watch() 配置
    // watch(sum, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // }, {
    //   immediate: true
    // })
    // 监听 reactive 定义的一个响应式数据，此处无法正确的获取 oldValue，强制开启深度监视
    // watch(Person, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // });
    // 监视 reactive 定义的某个属性
    // watch(() => Person.age, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // });
    // 监视 reactive 定义的某些属性
    // watch([() => Person.age, () => Person.name], (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // });
    // 特殊情况：监视 reactive 定义对象中的对象属性 deep 配置生效
    watch(() => Person.job, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }, { deep: true });
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
