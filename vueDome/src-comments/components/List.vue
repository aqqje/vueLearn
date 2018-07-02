<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="coments.length===0" style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(coment, index) in coments" :key="index" :coment="coment" :index="index" :removeComent="removeComent"/>
    </ul>
  </div>
</template>
<script>
import Item from './Item'
  export default {
    components: {Item},
    props: ['coments', 'removeComent']
}
</script>
<style scoped>
  .reply {
    margin-top: 0px;
  }
</style>
