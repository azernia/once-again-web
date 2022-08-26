<template>
  <h1>{{a}}</h1>
  <SingleComponent a="123" @modify="modifyA"/>
</template>

<script setup>
import { ref } from 'vue';
import SingleComponent from './components/SingleComponent.vue';

const a = ref(0);

const modifyA = (value) => {
  a.value = value;
};

</script>

<style>

</style>
