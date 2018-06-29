/*
*  入口 JS: 创建 Vue 实例
* */
// 引入组件
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  // 声明组件
  components:{
    App
  },
  // 使用组件
  template: '<App/>'
})
