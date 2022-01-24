<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">输出上方的 DOM 元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
import School from "@/components/School";

export default {
  name: "App",
  components: {
    School
  },
  data() {
    return {
      msg: '欢迎学习 Vue'
    }
  },
  methods: {
    showDOM() {
      // 获取 DOM 元素
      console.log(this.$refs.title);
      // 获取组件对象的实例对象
      console.log(this.$refs.sch);
    }
  }
}
</script>

<style scoped>

</style>
