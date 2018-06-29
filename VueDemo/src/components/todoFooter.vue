<template>
  <div class="todo-footer">
    <div v-show="todos.length">
      <label>
        <input type="checkbox" v-model="isAllCheck"/>
      </label>
      <span>
            <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
          </span>
      <button class="btn btn-danger" v-show="completeSize" @click="removeCompleteTodos">清除已完成任务</button>
    </div>
    <div v-show="!todos.length">
      <span>
            <span style="text-align: center;display: block">还没有添加任务哦,赶快去添加吧</span>
          </span>
    </div>
  </div>
</template>

<script>
    export default {
      props:{
        todos: Object,
        removeCompleteTodos: Function,
        selectAllTodos: Function

      },
      computed:{
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
      }
    }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
