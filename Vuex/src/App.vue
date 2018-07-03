<!-- html -->
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoList/>
      <TodoFooter/>
    </div>
  </div>
</template>
<!-- js -->
<script>
  import TodoHeader from './components/todoHeader'
  import TodoList from './components/todoList'
  import TodoFooter from './components/todoFooter'
  import storageUtil from './utils/storageUtil'
    export default {
      components:{
        TodoHeader,
        TodoList,
        TodoFooter
      }
    }
</script>
<!-- css -->
<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
