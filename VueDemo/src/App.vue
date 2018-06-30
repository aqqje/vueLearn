<!-- html -->
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<TodoHeader @addTodo="addTodo"/>&lt;!&ndash; 给 TodoHeader 对象绑定 addTodo 监听事件 &ndash;&gt;-->
      <TodoHeader ref="todoHeader"/><!-- 初始化时绑定监听 -->
      <TodoList :todos="todos"/>
      <TodoFooter :todos="todos" :removeCompleteTodos="removeCompleteTodos" :selectAllTodos="selectAllTodos">
        <input slot="check" type="checkbox" v-model="isAllCheck"/>
        <span slot="select">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button slot="completeRemove" class="btn btn-danger" v-show="completeSize" @click="removeCompleteTodos">清除已完成任务</button>
        <span slot="todoIsNull" style="text-align: center;display: block">还没有添加任务哦,赶快去添加吧</span>
      </TodoFooter>
    </div>
  </div>
</template>
<!-- js -->
<script>
  import TodoHeader from './components/todoHeader'
  import TodoList from './components/todoList'
  import TodoFooter from './components/todoFooter'
  import Pubsub from 'pubsub-js'
  import StorageUtils from './utils/storageUtil'
    export default {
    data(){
      return{
        /*todos: [
          {title: 'eat', complete: false},
          {title: 'sleep', complete: false},
          {title: 'play', complete: true},
          {title: 'game', complete: false}
          ]*/
        todos: StorageUtils.readTodos()
      }
    },computed:{
        completeSize(){
          return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0), 0)
        },
        isAllCheck:{
          get(){
            return this.completeSize === this.todos.length && this.completeSize > 0
          },
          set(value){ // 当前 checkbox 的最新值
            this.selectAllTodos(value)
          }
        }
      },
      mounted(){
      this.$refs.todoHeader.$on('addTodo', this.addTodo)
        Pubsub.subscribe('removetodo', (msg, index) => {// 订阅消息 --- > 监听事件
          this.removetodo(index)
        })
      },
      watch:{ // 深度监视
      todos:{
        deep: true,
        handler: function(value){
          // 将最新 todos 的值 JSON 数据保存到 localStorage 中
          StorageUtils.saveTodos()
        }
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
