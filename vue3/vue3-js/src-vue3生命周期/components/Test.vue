<template>
  <h2>当前求和为:{{sum}}</h2>
  <button @click="sum++">click plus</button>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

export default {
  name: 'Test',
  // 通过配置项体现 vue3 生命周期
  // beforeCreate() {
  //   console.log('---beforeCreate---');
  // },
  // created() {
  //   console.log('---created---');
  // },
  // beforeMount() {
  //   console.log('---beforeMound---');
  // },
  // mounted() {
  //   console.log('---mounted---');
  // },
  // beforeUpdate() {
  //   console.log('---beforeUpdate---');
  // },
  // updated() {
  //   console.log('---updated---');
  // },
  // beforeUnmount() {
  //   console.log('---beforeUnmount---');
  // },
  // unmounted() {
  //   console.log('---unmounted---');
  // },
  setup () {
    const sum = ref(0);
    // 组合式 API 配置 beforeCreate created 没有 setup 方式，setup 相当与这两个，优先级高于配置项方式
    onBeforeMount(() => console.log('---beforeMound---'));
    onMounted(() => console.log('---mounted---'));
    onBeforeUpdate(() => console.log('---beforeUpdate---'));
    onUpdated(() => console.log('---updated---'));
    onBeforeUnmount(() => console.log('---beforeUnmount---'));
    onUnmounted(() => console.log('---unmounted---'));
    return {
      sum
    };
  }
};
</script>

<style scoped>

</style>
