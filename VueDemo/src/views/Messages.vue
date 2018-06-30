<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/messages/dail/${message.id}`">{{message.title}}</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            messages: []
          }
        },
      mounted(){ // 模拟 ajax 从后台获取数据
          setTimeout(() => {
            const messages = [
              {
                id: 1,
                title: 'message01'
              },
              {
                id: 2,
                title: 'message02'
              },
              {
                id: 3,
                title: 'message03'
              },
              {
                id: 4,
                title: 'message04'
              },
              {
                id: 5,
                title: 'message05'
              },
              ]
            this.messages = messages
          }, 1000)
      }
    }
</script>

<style>

</style>
