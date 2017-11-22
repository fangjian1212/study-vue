<template>
  <div>
    <myHeader></myHeader>
    <div>------------------------</div>
    <img src="/static/image/demo/gyy.jpg"/>
    <div>------------------------</div>
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>

    <div style="margin: 20px 0">
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </div>

    <div>
      <el-button round>圆形按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </div>
    <div class="article_list">
      <ul>
        <li v-for="i in list">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <router-link :to="'/content/' + i.id">
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
