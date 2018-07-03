<template>
  <div class="totalCount">
    <div v-show="totalCount">
      <label>
        <input type="checkbox" v-model="isAllSelect"/>
      </label>
      <span>
            <span>已完成{{completeCount}}</span> / 全部{{totalCount}}
          </span>
      <button class="btn btn-danger" v-show="completeCount" @click="removeCompleteTodos">清除已完成任务</button>
    </div>
    <div v-show="!totalCount">
      <span>
            <span style="text-align: center;display: block">还没有添加任务哦,赶快去添加吧</span>
          </span>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
      computed:{
        ...mapGetters(['totalCount', 'completeCount']),
        isAllSelect:{
          get(){
            return this.$store.getters.isAllSelect
          },
          set(value){ // 当前 checkbox 的最新值
            this.$store.dispatch('selectAllTodos', value)
          }
        }
      },
    methods:{
      ...mapActions(['removeCompleteTodos'])
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
