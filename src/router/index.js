import Vue from 'vue'
import Router from 'vue-router'

//引入子路由
import ArticleFrame from '@/frame/article/article'
import UserFrame from '@/frame/user/user'
import DemoFrame from '@/frame/demo/demo'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/demo',
      component: DemoFrame,
      children: DemoFrame.routes
    },
    //文章
    {
      path: '/article',
      component: ArticleFrame,
      children: ArticleFrame.routes
    },
    //用户
    {
      path: '/user/:name',
      component: UserFrame,
      children: UserFrame.routes,
    },
  ]
})
