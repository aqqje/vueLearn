<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  import Pubsub from 'pubsub-js'
    export default {
      data(){
        return {
          searchName: ''
        }
      },
      methods:{
        // 发布搜索消息
        search(){
          const searchName = this.searchName.trim()
          Pubsub.publish('search', searchName)
        }
      }
    }
</script>

<style>

</style>
