<template>
	<div class="app">
		<h1>{{msg}}</h1>
		<School/>
		<!--<Student @getStudentName="getStudentName"/>-->
    <!-- 写法二 -->
		<Student ref="student"/>
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student},
    data() {
      return {
        msg: 'Hello'
      }
    },
    methods: {
      getStudentName(name, ...params) {
        console.log(name, params);
      }
    },
    mounted() {
      this.$refs.student.$on('getStudentName', this.getStudentName);
    }
	}
</script>

<style scoped>
	.app{
		background-color: gray;
	}
</style>
