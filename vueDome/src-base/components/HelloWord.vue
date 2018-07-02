<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            msg: 'Hello Word Vue'
          }
        }
    }
</script>

<style scoped>
  .msg{
    color: red;
    font-size: 30px;
  }
</style>
