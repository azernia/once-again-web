<template>
  <div>
    <h1>当前求和为:{{$store.state.sum}}</h1>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseOdd">当前求和为奇数再加</button>
    <button @click="increaseWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Calculate",
  data() {
    return {
      number: 1,
    }
  },
  methods: {
    increase() {
      this.$store.commit('ADD', this.number);
    },
    decrease() {
      this.$store.dispatch('decrease', this.number);
    },
    increaseOdd() {
      this.$store.dispatch('addOdd', this.number);
    },
    increaseWait() {
      setTimeout(() => {
        this.$store.dispatch('add', this.number);
      }, 500)
    }
  }
}
</script>

<style scoped>
  button {
    margin-left: 5px;
  }
</style>