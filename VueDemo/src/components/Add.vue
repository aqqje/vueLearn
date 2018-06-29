<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="coment"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
    export default {
      methods: {
        add(){
          // 1.检查合法性
          const name = this.name
          const coment = this.coment
          if(!name || !coment){
            alert('用户名和内容不能为空！')
            return
          }
          // 2.封装成一个 coment 对象
          const newComent = {name, coment}
          // 3.增加到 coments 中
          this.addComent(newComent)
          // 4.清空表单数据
          this.name = ''
          this.coment = ''
        }
      },
      data(){
        return{
          name: '',
          coment: ''
        }
      },
      props:{
        addComent:{
          type: Function,
          required: true
        }
      },
        name: "Add.vue"
    }
</script>

<style scoped>
</style>
