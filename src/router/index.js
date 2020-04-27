import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login'
import Edit from '../views/Edit'
import Refuse from '../views/Refuse'
import Square from '../views/Square'
import MyPublic from '../views/MyPublic'
import Analyse from '../views/Analyse'
import Answer from '../views/Answer'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireLogin: true
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/refuse',
    name: 'Refuse',
    component: Refuse
  },
  {
    path: '/square',
    name: 'Square',
    component: Square
  },
  {
    path: '/myPublic',
    name: 'MyPublic',
    component: MyPublic,
  },
  {
    path: '/analyse',
    name: 'Analyse',
    component: Analyse,
  },
  {
    path: '/answer',
    name: 'Answer',
    component: Answer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  // 判断是否需要登录
  if(to.matched.some(res=>res.meta.requireLogin)){
    let waitTime = window.setTimeout(()=>{
      if(window.localStorage.getItem('userInfo')){
        axios({
          method: 'post',
          url: '/loginAccess',
          data:{
            username: JSON.parse(window.localStorage.getItem('userInfo'))
          }
        }).then((res)=>{
          if(res.data.code == 1){
            next()
          }else{
            next({path:'/login'})
          }
        })
      }else{
        next({path:'/login'})
      }
  },1)}
  else{
    next();
  }
})

export default router
