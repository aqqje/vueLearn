<template>
  <div>
    <p>click {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="add">+</button>
    <button @click="dev">-</button>
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
        return this.count%2 === 0 ? '偶数 ': '奇数'
      }
    },
    methods: {
      add(){
        const count = this.count
        this.count = count + 1
      },
      dev(){
        const count = this.count
        this.count = count - 1
      },
      increamtIfOdd(){
        const count = this.count

        if(count % 2 === 1){
          this.count = count + 1
        }
      },
      increamtAysnc(){
        setTimeout(() => {
          const count = this.count
          this.count = count + 1
        },1000)
      },
    }
  }
</script>

<style>
</style>
