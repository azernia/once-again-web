<template>
  <ul class="todo-main">
    <!-- 方式一 -->
    <!--<MyItem v-for="todo in todos" :key="todo.id" :title="todo.title" :completed="todo.completed"/>-->
    <!-- 方式二 -->
    <MyItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </ul>
</template>

<script>
import MyItem from "@/components/MyItem";

export default {
  name: "List",
  components: {
    MyItem
  },
  props: ['todos']
}
</script>

<style scoped>

  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>