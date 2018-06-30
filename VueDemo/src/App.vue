<template>
  <div class="container">
    <UserSearch/>
    <UserMain/>
  </div>
</template>

<script>
  import UserSearch from './components/userSearch'
  import UserMain from './components/userMain'
    export default {
      components:{
        UserSearch,
        UserMain
      }
    }
</script>

<style>

</style>
