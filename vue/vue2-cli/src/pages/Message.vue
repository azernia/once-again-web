<template>
  <div>
    <ul>
      <li v-for="message in messageList" :key="message.id">
        <!--<router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{message.title}}</router-link>&nbsp;&nbsp;-->
        <!--<router-link :to="{-->
        <!--  name: 'detail',-->
        <!--  query: {-->
        <!--    id: message.id,-->
        <!--    title: message.title-->
        <!--  }-->
        <!--}">-->
        <router-link :to="`/home/message/detail/666/sss`">{{message.title}}</router-link>&nbsp;&nbsp;
          {{message.title}}
        </router-link>&nbsp;&nbsp;
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {
          id: '001',
          title: 'AAA'
        },
        {
          id: '002',
          title: 'BBB'
        },
        {
          id: '003',
          title: 'CCC'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>