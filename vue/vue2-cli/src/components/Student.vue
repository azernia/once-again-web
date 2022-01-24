<template>
	<div class="demo">
    <h1>{{msg}}</h1>
		<h2>学生名称：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>学生年龄：{{modifyName}}</h2>
	</div>
</template>

<script>
  export default {
      name:'School',
      data(){
        return {
          msg: 'Hello',
          modifyName: this.name
        }
      },
      // 外部传递的数据
      // 限制类型 必要性 默认值
      // 接受的 prop 不允许修改
      // 优先级更高，优先使用 props
      props: {
        name: {
          type: String,
          // 是否必传
          required: true
        },
        age: {
          type: Number,
          // 默认值
          default: 99
        },
        sex: {
          type: String,
          // 是否必传
          required: true
        }
      }
      // 接收的同时对类型进行限制
      // props: {
      //   name: String,
      //   sex: String,
      //   age: Number
      // }
      // 简单接受
      // props: [
      //     'name',
      //     'sex',
      //     'age'
      // ]
  }
</script>

<style>
	.demo{
		background-color: orange;
	}
</style>
