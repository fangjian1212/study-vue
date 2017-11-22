// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/****************************************************************************
 引入一些插件或静态资源，当然引入之前要先安装了该插件，在package.json文件中有记录
 */
import Vue from 'vue'
import App from './App'
import router from './config/routers'

// 引用API文件
import api from './api/index'
// 引用工具文件
import utils from './utils/index'
//引入 Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {size: 'small'})

// utils.demo()

// 将API方法绑定到全局
Vue.prototype.$api = api
// 将工具方法绑定到全局
Vue.prototype.$utils = utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
