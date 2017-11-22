<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  // 引入页面
  import HelloWorld from '@/components/HelloWorld'
  import DemoArticleList from '@/page/demo/demo1'

  const routes = [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: 'demo1',
      component: DemoArticleList
    }

  ]

  export default {
    routes
  }
</script>
