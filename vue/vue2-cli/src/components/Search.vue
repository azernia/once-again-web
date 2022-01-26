<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
      <button @click="executeSearch">Search</button>
    </div>
  </section>
</template>

<script>
// https://api.github.com/search/users?q=xxx
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    executeSearch() {
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
          resp => {
            // console.log(resp);
            this.$bus.$emit('results', resp.data.items);
          },
          error => {
            console.log(error);
          }
      );
    }
  }
}
</script>