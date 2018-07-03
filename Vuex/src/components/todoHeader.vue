<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addItem" v-model="inputTodo"/>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          inputTodo: ''
        }
      },
      methods:{
        addItem(){
          //1.检查合法性
          const inputTodo = this.inputTodo.trim()
          if(!inputTodo){
            alert("请输入！")
            return
          }
          //2.封装成 todo 对象
          const todo = {
            title: inputTodo,
            complete: false }
          //3.增加到 todos 数组
          this.$store.dispatch("add_todo", todo)
          //4.扫尾工作
          this.inputTodo = ''
        }
      },
    }
</script>

<style>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
