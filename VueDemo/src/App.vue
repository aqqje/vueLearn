<!-- html -->
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :removetodo="removetodo"/>
      <TodoFooter :todos="todos" :removeCompleteTodos="removeCompleteTodos" :selectAllTodos="selectAllTodos"/>
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
        },
        removetodo(index){
          this.todos.splice(index, 1)
        },
        // 删除所有选中的
        removeCompleteTodos(){
          this.todos = this.todos.filter( todo => !todo.complete)
        },
        // 全选|全不选
        selectAllTodos(isSelectAll){
          this.todos.forEach(todo => todo.complete = isSelectAll)
        }
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
