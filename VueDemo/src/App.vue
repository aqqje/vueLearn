<!-- html -->
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos"/>
      <TodoFooter/>
    </div>
  </div>
</template>
<!-- js -->
<script>
  import TodoHeader from './components/todoHeader'
  import TodoList from './components/todoList'
  import TodoFooter from './components/todoFooter'
    export default {
    data(){
      return{
        todos: [
          {title: 'eat', complete: false},
          {title: 'sleep', complete: false},
          {title: 'play', complete: true},
          {title: 'game', complete: false}
          ]
      }
    },
      components:{
        TodoHeader,
        TodoList,
        TodoFooter
      },
      methods:{
        addTodo(todo){
          this.todos.unshift(todo)
        }
      }
    }
</script>
<!-- css -->
<style scoped>
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
