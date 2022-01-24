<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点我显示名称</button>
  </div>
</template>

<script>
  /*
      export const school 分别暴露
      export {school} 统一暴露
      export default school 默认暴露 一般为一个时使用默认暴露
   */
  // 组件交互
  export default {
    name: 'School',
    data() {
      return {
        name: '123',
        address: '321'
      }
    },
    methods: {
      showName() {
        alert(this.name);
      }
    }
  }
</script>

<style>
  /* 组件的样式 */
  .demo {
    background-color: orange;
  }
</style>
