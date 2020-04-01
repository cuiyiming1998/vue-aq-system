import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login'

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
    //设置1ms延迟，等待本地存储用户信息
    let waitTime = window.setTimeout(()=>{
      if(window.localStorage.getItem('userInfo')){
        next()
      }else{
        next({path:'/login'})
      }
  },1)}
  else{
    next();
  }
})

export default router
