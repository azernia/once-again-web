<template>
  <div>
    <Header/>
    <router-view/>
    <Footer v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import Header from '@/components/header/Index'
import Footer from '@/components/footer/Index'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  // App 的 mounted 只会执行一次
  mounted() {
    // 派发 action
    this.$store.dispatch('categoryList');
  }
}
</script>

<style>

</style>
