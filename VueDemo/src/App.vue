<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add/>
      <List :coments="coments"/>
    </div>
  </div>
</template>

<script>
  import List from './components/List'
  import Add from './components/Add'
    export default {
    data(){
      return{
        coments: [
          {name: 'rose', coment: 'I'},
          {name: 'allen', coment: 'like'},
          {name: 'tom', coment: 'love'},
          {name: 'cat', coment: 'aqqje'},
          {name: 'jack', coment: 'liuli'},
        ]
      }
    },
      components: {Add, List},
        name: "App.vue"
    }
</script>

<style scoped>

</style>
