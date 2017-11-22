<template>
  <div>
    user index
    <div>==={{ routeParams.name }}===</div>
    <router-link :to="routeParams.name+'/info'">
      {{ routeParams.name }}
    </router-link>

    <ul>
      <li v-for="(value,key) in routeParams">
        {{ key }} : {{ value }}
      </li>
    </ul>

    <ul>
      <li v-for="i in list">
        {{i.name}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        routeParams: this.$route.params,
        list: [
          {name: 'fj1', age: 1},
          {name: 'fj2', age: 2},
          {name: 'fj3', age: 3}
        ]
      }
    }
  }

</script>
