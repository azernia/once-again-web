<template>
  <button @click="isShowTest = !isShowTest">change</button>
  <Test v-if="isShowTest"/>
</template>

<script>
import {ref} from "vue";
import Test from "@/components/Test";

export default {
  name: 'App',
  components: {
    Test
  },
  setup() {
    const isShowTest = ref(true);

    return {
      isShowTest
    }
  }
}
</script>

<style>

</style>
