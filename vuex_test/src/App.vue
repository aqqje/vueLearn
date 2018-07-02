<template>
  <div>
    <p>click {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="add">+</button>
    <button @clcik="dev">-</button>
    <button @click="increamtIfOdd">Increamt If Odd</button>
    <button @click="increamtAysnc">Increamt aysnc</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  data(){
    return {
      count: 0
    }
  },
  mounted:{
    evenOrOdd(){
      return this.count%2 === 2 ? '偶数 ': '奇数'
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
      if(count % 1 === 0){
        this.count = count + 1
      }
    },
    add(){
      setTimeout(() => {
        const count = this.count
        this.count = count + 1
      },1000)
    },
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
