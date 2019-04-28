import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import fastClick from 'fastclick'//解决手机端click300毫秒的延迟
import './assets/styles/reset.css'
import './assets/styles/border.css'//移动端真正1px边框
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//es6语法，es5要router：router 这样
  // components:{ App },
  // template:'<App/>'
  render: h => h(App)
})
//路由是根据网址的不同，返回不同的内容给用户