<template>
    <ul>
      <li v-for="(newArr, index) in newArrs" :key="key">{{ newArr }}</li>
    </ul>
</template>

<script>
    export default {
      data(){
        return {
          newArrs: ['LIULI', 'LOVE', 'AQQJE',]
        }
      }
    }
</script>

<style>

</style>
