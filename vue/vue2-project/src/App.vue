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
  }
}
</script>

<style>

</style>
