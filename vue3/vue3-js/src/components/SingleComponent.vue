<template>
  <div class="container">
    <div class="div-style">
      <h2>{{number}}</h2>
      <button @click="number++">点击+1</button>
    </div>
    <hr>
    <div class="div-style">
      <h2>{{props.a}}</h2>
    </div>
    <hr>
    <div>
      <button @click="modifyFn">修改</button>
    </div>
  </div>
</template>

<script setup>
import {ref,defineProps,defineEmits} from "vue";

const number = ref(0);
const props = defineProps(['a']);
const emit = defineEmits(['modify']);

const modifyFn = () => {
  emit('modify', 12)
}

</script>

<style scoped>

</style>
