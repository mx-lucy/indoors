import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '../components/Home'
import station from '../view/table/station'
import table from "./table/table";
import algorithm from "./algorithm/algorithm";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
      ]
    },
    ...table,
    ...algorithm

  ]
})
