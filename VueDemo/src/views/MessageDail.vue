<template>
  <div>
    <p>ID:{{$route.params.id}}</p>
    <ul>
      <li>id: {{messageDail.id}}</li>
      <li>title: {{messageDail.title}}</li>
      <li>content: {{messageDail.content}}</li>
    </ul>
    <hr>
  </div>
</template>
<script>
    export default {
      data(){
        return {
          messageDail: {}
        }
      },
      mounted(){
        setTimeout(() => {
          const messagesDails = [
            {
              id: 1,
              title:'Message01',
              content: 'Message01content......'},
            {
              id: 2,
              title:'Message02',
              content: 'Message02content......'},
            {
              id: 3,
              title:'Message03',
              content: 'Message03content......'},
          ]
          this.messagesDails = messagesDails
          //const ID = this.msgID*1
          this.messageDail = messagesDails.find(detail => detail.id===ID)
        },1000)
      },
      watch:{
        $route: function(value){ // 当前路由的值
          const ID = value.params.id*1
          this.messageDail = this.messagesDails.find(detail => detail.id===ID)
        }
      }
    }
</script>

<style>

</style>
