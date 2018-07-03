<template>
  <ul class="todo-main">
    <item v-for="(todo, index) in todos" :key="index" :index="index" :todo="todo"/>
  </ul>
</template>

<script>
  import Item from './todoItem'
  import {mapState} from 'vuex'
  import storageUtil from '../utils/storageUtil'
    export default {
      computed:{
        ...mapState(['todos'])
      },
      watch:{
        todos:{
          deep: true,
          handle: storageUtil.saveTodos
        }
      },
      components:{
        Item
      }
    }
</script>

<style>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
