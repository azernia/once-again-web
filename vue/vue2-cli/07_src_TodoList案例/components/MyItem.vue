<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)"/>
      <!-- 不建议使用 违反原则 修改了 props -->
      <!--<input type="checkbox" v-model="todo.completed"/>-->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  // 方式二
  props: ['todo', 'modifyCompletedStatus', 'deleteItem'],
  methods: {
    /**
     * 处理选中
     * @param id
     */
    handleCheck(id) {
      this.modifyCompletedStatus(id);
    },
    /**
     * 处理删除
     * @param id
     */
    handleDelete(id) {
      if (confirm('确定删除吗？')) {
        this.deleteItem(id);
      }
    }
  }
  // 方式一
  // props: {
  //   title: String,
  //   completed: Boolean
  // }
}
</script>

<style scoped>

  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #dddddd;
  }

  li:hover button {
    display: block;
  }

</style>