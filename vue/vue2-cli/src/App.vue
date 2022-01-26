<template>
  <div class="container">
    <Category title="游戏">
      <template scope="data">
        <ul>
            <li v-for="(game, index) in data.games" :key="index">
                {{game}}
            </li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="data">
        <ol>
            <li v-for="(game, index) in data.games" :key="index">
                {{game}}
            </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <h4 v-for="(game, index) in games" :key="index">{{game}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>

import Category from '@/components/Category'

export default {
  name: "App",
  components: {
    Category
  }
}
</script>

<style lang="css">
  .container {
    display: flex;
    justify-content: space-around;
  }
</style>