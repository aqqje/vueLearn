<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/messages/dail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
      <button @click="$router.back()">回退</button>
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
              }
              ]
            this.messages = messages
          }, 1000)
      },
      methods: {
        pushShow(id){
          this.$router.push(`/home/messages/dail/${id}`)
        },
        replaceShow(id){
          this.$router.replace(`/home/messages/dail/${id}`)
        }
      }
    }
</script>

<style>

</style>
