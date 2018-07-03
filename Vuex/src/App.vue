<template>
  <div>
    <p>click {{$store.state.count}} times, count is {{evenOrOdd}}</p>
    <button @click="increamt">+</button>
    <button @click="decreamt">-</button>
    <button @click="increamtIfOdd">Increamt If Odd</button>
    <button @click="increamtAysnc">Increamt aysnc</button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        count: 0
      }
    },
    computed:{
      evenOrOdd(){
        return this.$store.getters.evenOrOdd
      }
    },
    methods: {
      increamt(){
        this.$store.dispatch('increamt')
      },
      decreamt(){
        this.$store.dispatch('decreamt')
      },
      increamtIfOdd(){
       this.$store.dispatch('increamtIfOdd')
      },
      increamtAysnc(){
        this.$store.dispatch('increamtAysnc')
      }
    }
  }
</script>

<style>
</style>
