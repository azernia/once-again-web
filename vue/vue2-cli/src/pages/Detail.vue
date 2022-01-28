<template>
  <ul>
    <li>消息ID:{{this.$route.query.id}}</li>
    <li>消息标题:{{this.$route.query.title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ['a','b'],
  mounted() {
  }
}
</script>

<style scoped>

</style>