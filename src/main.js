// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import vpay from 'vpay'

Vue.config.productionTip = false


// 引入插件
import vpay from './lib/vpay'   // 自己本地定义的组件 还未发布npm
// 使用插件
Vue.use(vpay);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
