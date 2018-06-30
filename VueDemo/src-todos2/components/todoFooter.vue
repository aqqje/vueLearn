<template>
  <div class="todo-footer">
    <div v-show="todos.length">
      <label>
        <!--<input type="checkbox" v-model="isAllCheck"/>-->
        <slot name="check"></slot>
      </label>
      <span>
            <!--<span>已完成{{completeSize}}</span> / 全部{{todos.length}}-->
            <slot name="select"></slot>
          </span>
      <!--<button class="btn btn-danger" v-show="completeSize" @click="removeCompleteTodos">清除已完成任务</button>-->
      <slot name="completeRemove"></slot>
    </div>
    <div v-show="!todos.length">
      <span>
            <!--<span style="text-align: center;display: block">还没有添加任务哦,赶快去添加吧</span>-->
        <slot name="todoIsNull"></slot>
          </span>
    </div>
  </div>
</template>

<script>
    export default {
      props:{
        todos: Array,
      },
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
