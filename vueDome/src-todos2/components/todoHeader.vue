<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addItem" v-model="title"/>
  </div>
</template>

<script>
    export default {
      props: {
      },
      data(){
        return {
          title: ''
        }
      },
      methods:{
        addItem(){
          //1.检查合法性
          const title = this.title.trim()
          if(!title){
            alert("请输入！")
            return
          }
          //2.封装成 todo 对象
          const todo = {title, complete: false }
          //3.增加到 todos 数组
          this.$emit('addTodo',todo)// 使用 addTodo 使用
          //4.扫尾工作
          this.title = ''
        }
      }
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
