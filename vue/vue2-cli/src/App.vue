<template>
  <div>
    <Calculate/>
    <hr>
    <Person/>
  </div>
</template>

<script>
import Calculate from "@/components/Calculate";
import Person from "@/components/Person";

export default {
  name: "App",
  components: {
    Calculate,
    Person
  }
}
</script>