<template>
  <div>
    <!--
        :age
          传递的值为 "" 中的表达式的值
    -->
    <Student name="123" :age="321" sex="male"/>
  </div>
</template>

<script>
import Student from "@/components/Student";

export default {
  name: "App",
  components: {
    Student
  }
}
</script>

<style scoped>

</style>
