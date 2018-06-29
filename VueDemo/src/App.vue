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
      <!-- 使用组件 -->
      <Add/>
      <!--传入属性-->
      <List :coments="coments"/>
    </div>
  </div>
</template>

<script>
  //引入组件
  import Add from './components/Add.vue'
  import List from './components/List.vue'
    export default {
    data(){
      return{
        coments:[
          {name: 'rose', coment: 'vue good'},
          {name: 'jack', coment: 'vue aqqje'},
          {name: 'alle', coment: 'vue so so'},
        ]
      }
    },
    name: "App.vue",
    // 注册组件
    components: {
      Add,
      List
    }

    }
</script>
<style scoped>
</style>
