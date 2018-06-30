/**
 * 路由器模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Messages from '../views/Messages'
Vue.use(VueRouter)

export default new VueRouter({
  // router-link-active
  linkActiveClass: 'aqqje',
  routes:[// 配置 n 个路由
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: '/home/news',
          component: News
        },
        {
          path: '/home/messages',
          component: Messages
        }
      ]
    },
    {// 子路由默认显示
      path: "",
      redirect: '/home/news',
    },
    { // 主路由默认显示
      path: '/',
      redirect: '/about'
    },

  ]
})
