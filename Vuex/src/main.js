import Vue from 'vue'
import App from './App.vue'
import './css/base.css'
import store from './store'

new Vue({
  el: '#app',
  components: {App},
  render: h => h(App),
  store
})
