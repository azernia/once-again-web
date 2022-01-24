<template>
	<div>
    <!--
        :age
          传递的值为 "" 中的表达式的值
    -->
		<Student name="李四" sex="女" :age="18"/>
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>
