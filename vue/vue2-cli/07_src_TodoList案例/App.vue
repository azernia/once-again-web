<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 传递函数 -->
        <MyHeader :addItem="addItem"/>
        <MyList
            :todos="todos"
            :modifyCompletedStatus="modifyCompletedStatus"
            :deleteItem="deleteItem"
        />
        <MyFooter
            :todos="todos"
            :checkAllListener="checkAllListener"
            :clearAllCompletedItem="clearAllCompletedItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyList from "@/components/MyList";
import MyFooter from "@/components/MyFooter";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  data() {
    return {
      todos: [
        {
          id: '001',
          title: '吃饭',
          completed: true
        },
        {
          id: '002',
          title: '睡觉',
          completed: false
        },
        {
          id: '003',
          title: '抽烟',
          completed: true
        }
      ]
    }
  },
  methods: {
    /**
     * 添加元素
     * @param todoItem
     */
    addItem(todoItem) {
      this.todos.unshift(todoItem);
    },
    /**
     * 修改元素选中状态
     * @param id
     */
    modifyCompletedStatus(id) {
      this.todos.forEach(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
      })
    },
    /**
     * 删除元素
     * @param id
     */
    deleteItem(id) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id;
      });
    },
    /**
     * 是否全选
     * @param isChecked
     */
    checkAllListener(isChecked) {
      this.todos.forEach(todo => {
        todo.completed = isChecked;
      })
    },
    /**
     * 清空所有已完成
     */
    clearAllCompletedItem() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>