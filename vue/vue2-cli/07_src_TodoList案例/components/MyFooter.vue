<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!--<input type="checkbox" :checked="isAll" @change="checkAll"/>-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
          <span>已完成{{completedItem}}</span> / 全部{{total}}
        </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ['todos','checkAllListener', 'clearAllCompletedItem'],
  computed: {
    completedItem() {
      // return this.todos.filter(todo => todo.completed).length;
      // reduce 统计 最后一次的返回值为 reduce 的返回值
      return this.todos.reduce((pre, current) => pre + (current.completed ? 1 : 0), 0);
    },
    total() {
      return this.todos.length;
    },
    isAll: {
      get() {
        return this.completedItem === this.total && this.total > 0;
      },
      set(value) {
        this.checkAllListener(value);
      }
    }
    // isAll() {
    //   return this.completedItem === this.total && this.total > 0;
    // }
  },
  methods: {
    clearAll() {
      this.clearAllCompletedItem();
    }
    // checkAll(event) {
    //   this.checkAllListener(event.target.checked);
    // }
  }
}
</script>

<style scoped>

  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>