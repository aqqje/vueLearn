<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="removeItem">删除</a>
    </div>
    <p class="user"><span >{{coment.name}}</span><span>说:</span></p>
    <p class="centence">{{coment.coment}}</p>
  </li>
</template>

<script>
    export default {
      props: {
        coment: Object,
        index: Number,
        removeComent: Function
      },
        name: "Item.vue",
      methods:{
        // 根据下标删除评论
        removeItem(){
          const {coment, index, removeComent} = this
          if(window.confirm('你确定删除【' + coment.name + '】的评论吗')){
            removeComent(index)
          }
        }
      }
    }
</script>

<style scoped>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
