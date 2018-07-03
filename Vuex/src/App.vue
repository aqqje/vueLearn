<template>
  <div>
    <p>click {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="increamt">+</button>
    <button @click="decreamt">-</button>
    <button @click="increamtIfOdd">Increamt If Odd</button>
    <button @click="increamtAysnc">Increamt aysnc</button>
  </div>
</template>
<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    computed:{
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
      /*evenOrOdd(){
        return this.$store.getters.evenOrOdd
      }*/
    },
    methods: {
      ...mapActions(['increamt', 'decreamt', 'increamtIfOdd', 'increamtAysnc'])
     /*increamt(){
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
      }*/
    }
  }
</script>

<style>
</style>
