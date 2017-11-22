<template>
  <div>
    <myHeader></myHeader>
    <div class="article_list">
      <ul>
        <li></li>
        <li v-for="i in list">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <router-link :to="'/article/detail/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <myFooter></myFooter>
  </div>
</template>
<script>
  import myHeader from '@/components/header'
  import myFooter from '@/components/footer'

  export default {
    components: {myHeader, myFooter},
    data () {
      return {
        list: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      demo () {
        function myTimeout (ms) {
          return new Promise((resolve, reject) => {
            setTimeout(resolve, ms, 'resolve')
          })
        }

        myTimeout(100).then((value) => {
          console.log(value)
        }, (r) => {
          console.info(r)
        })
      },

      getData () {
        this.$api.get('topics', null, r => {
          console.log(r)
          this.list = r.data
        }, function (f) {
          console.error(f)
        })
      }
    }
  }
</script>
<style>
  .article_list {
    margin: auto;
  }
</style>
