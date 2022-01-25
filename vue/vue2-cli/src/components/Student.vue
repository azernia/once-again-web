<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给 App</button>
    <button @click="removeEvent">解绑事件</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男'
			}
		},
    methods: {
      sendStudentName() {
        // 触发 Student 实例的 getStudentName 事件
        this.$emit('getStudentName', this.name, 111, 222, 333);
      },
      removeEvent() {
        this.$off('getStudentName')
      }
    }
	}
</script>

<style scoped>
	.student{
		background-color: pink;
    padding: 5px;
	}
</style>
