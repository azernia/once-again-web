<template>
  <!-- Vue 3 可以没有根标签 -->
  <h1>I'm App</h1>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <h2>{{job.type}}</h2>
  <h2>{{job.salary}}</h2>
  <h2>{{car.type}}</h2>
  <h2>{{car.name}}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
// 基本类型使用 ref, reactive 不能放基本类型
import {ref,reactive} from "vue";

export default {
  name: 'App',
  setup() {
    // 数据变为响应式
    const name = ref('张三');
    const age = ref(18);
    const job = ref({
      type: 'Java',
      salary: '30K'
    });
    // reactive 可监测多层
    const car = reactive({
      type: '1',
      name: 'a'
    });
    const hobby = reactive(['a', 'b', 'c']);
    const changeInfo = () => {
      // 修改响应式的值 ref 需要 .value
      name.value = '李四';
      age.value = 20;
      job.value.type = 'HTML';
      job.value.salary = '12K';
      car.type = '2';
      car.name = 'b';
      hobby[0] = 'E';
    }

    return {
      name,
      age,
      changeInfo,
      job,
      car
    }
  }
}
</script>

<style>

</style>
