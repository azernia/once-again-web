<template>
  <div class="container">
    <Search/>
    <ResultList/>
  </div>
</template>

<script>
import Search from "@/components/Search";
import ResultList from "@/components/ResultList";

export default {
  name: "App",
  components: {
    Search,
    ResultList
  }
}
</script>