<template>
  <h1>一个人的信息</h1>
  <div>
    <div>
      <label>姓：</label>
      <input type="text" v-model="Person.firstname">
    </div>
    <div>
      <label>名：</label>
      <input type="text" v-model="Person.lastname">
    </div>
    <div>
      <label>全名：</label>
      <input type="text" v-model="Person.fullName">
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'Test',

  setup () {
    const Person = reactive({
      firstname: '张',
      lastname: '三',
      age: 18
    });

    // 计算属性(简写，未考虑计算属性被修改)
    //  Person.fullName = computed(() => `${Person.firstname}-${Person.lastname}`)
    // 计算属性(完整写法)
    Person.fullName = computed({
      get () {
        return `${Person.firstname}-${Person.lastname}`;
      },
      set (value) {
        const nameArr = value.split('-');
        Person.firstname = nameArr[0];
        Person.lastname = nameArr[1];
      }
    });

    return {
      Person
    };
  }
};
</script>

<style scoped>

</style>
