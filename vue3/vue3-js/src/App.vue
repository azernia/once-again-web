<template>
  <button @click="isShowTest = !isShowTest">change</button>
  <Suspense>
    <!-- 真正展示 -->
    <template v-slot:default>
      <Test v-if="isShowTest"/>
    </template>
    <!-- 加载不出 -->
    <template v-slot:fallback>
      Loading...
    </template>
  </Suspense>
</template>

<script>
import {ref, defineAsyncComponent} from "vue";
// import Test from "@/components/Test";

const Test = defineAsyncComponent(() => import('./components/Test')); // 异步引入

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
