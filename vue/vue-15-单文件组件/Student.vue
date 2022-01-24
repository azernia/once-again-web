<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
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
    name: 'Student',
    data() {
      return {
        name: '哈哈哈',
        age: 18
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
