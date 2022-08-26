<template>
  <Test @hello="showHelloMessage" msg="aaa" school="123">
    <span>123</span>
    <template v-slot:a>
      <span>321</span>
    </template>
  </Test>
</template>

<script>
import Test from '@/components/Test';

export default {
  name: 'App',
  components: {
    Test
  },
  setup () {
    const showHelloMessage = (value) => {
      alert(`This is show hello message function ${value}`);
    };

    return {
      showHelloMessage
    };
  }
};
</script>

<style>

</style>
