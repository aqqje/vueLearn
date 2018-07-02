<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo">
    <!-- 使用组件 -->
    <HelloWord />
  </div>
</template>

<script>
  // 1.引入组件
  import HelloWord from './components/HelloWord.vue'
    export default {
    // 2. 注册组件
      components:{
        HelloWord
      }
    }
</script>

<style scoped>
  .logo{
    width: 200px;
    height: 200px;
  }
</style>
