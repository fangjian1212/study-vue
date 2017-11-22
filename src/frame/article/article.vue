<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  // 引入页面
  import ArticleList from '@/page/article/articleList'
  import ArticleContent from '@/page/article/content'

  const routes = [
    {
      path: 'list',
      component: ArticleList
    },
    {
      path: 'detail/:id',
      component: ArticleContent
    }

  ]

  export default {
    routes
  }
</script>
