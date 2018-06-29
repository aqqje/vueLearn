<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(coment, index) in coments" :key="index" :coment="coment"/>
    </ul>
  </div>
</template>

<script>
  import Item from './Item.vue'
    export default {
      components: {
        Item
      },
      template: '<Item/>',
      props: ['coments'],
        name: "List.vue"
    }
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }
</style>
