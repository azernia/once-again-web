<template>
  <div class="container">
    <button @click="getUsers">获取用户信息</button>
    <table v-show="users.length !== 0" style="border: 1px solid black">
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.username}}</td>
      </tr>
    </table>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { getUserList } from '@/api/userApi';

const users = ref([]);

const getUsers = async () => {
  const resp = await getUserList();
  users.value = resp.data;
};

</script>

<style scoped>

</style>
