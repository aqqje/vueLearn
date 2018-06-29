<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComent="addComent"/>
      <List :coments="coments" :removeComent="removeComent"/>
    </div>
  </div>
</template>

<script>
  import List from './components/List'
  import Add from './components/Add'
    export default {
    methods:{
      addComent(coment){
        this.coments.unshift(coment)
      },
      // 根据下标删除评论
      removeComent(index){
        this.coments.splice(index, 1)
      }
    },
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
