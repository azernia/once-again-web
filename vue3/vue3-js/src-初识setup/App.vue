<template>
  <!-- Vue 3 可以没有根标签 -->
  <h1>I'm App</h1>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <button @click="sayHello">CLICK</button>
</template>

<script>
export default {
  name: 'App',
  setup () {
    const name = '张三';
    const age = 18;
    const sayHello = () => {
      alert(`我叫${name}， 我${age}岁了`);
    };
    return {
      name,
      age,
      sayHello
    };
  }
};
</script>

<style>

</style>
