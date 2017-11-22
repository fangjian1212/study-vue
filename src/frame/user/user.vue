<template>
  <div>
    <h1>h1</h1>
    <div>{{ $route.params.name }}:</div>
    <router-view></router-view>
    <h2>h2</h2>
  </div>

</template>
<script>
  // 引入页面
  import UserIndex from '@/page/user/index'
  import UserInfo from '@/page/user/info'
  import UserLove from '@/page/user/love'

  const routes = [
    {
      path: '/',
      component: UserIndex
    },
    {
      path: 'info',
      component: UserInfo
    },
    {
      path: 'love',
      component: UserLove
    },
    {
      path: 'loved',
      redirect: 'love'
    }
  ]

  export default {
    routes
  }
</script>
