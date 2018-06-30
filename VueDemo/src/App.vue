<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>

    <div>
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link  class="list-group-item" to="/about">About</router-link>
          <router-link class="list-group-item" to="/home">Home</router-link>
          <!--<a href="#/about" class="list-group-item router-link-exact-active activeClass">About</a>
          <a href="#/about" class="list-group-item">About</a>-->
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel-body">
          <router-view></router-view>
          <!--<div>
            <h2>about组件</h2>
            <p>接收外部数据：LIULI</p><input type="text">
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>
