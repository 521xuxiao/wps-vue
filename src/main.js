import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import console from 'Console'
import * as WPS from './static/jwps.es6'
import comFun from './comfun/index'

Vue.prototype.console = console;
Vue.prototype.wps = WPS;

Vue.use(Element);
Vue.use(comFun);

Vue.config.productionTip = false;

// default 分页参数
Vue.prototype.$page = 1;
Vue.prototype.$size = 10;
Vue.prototype.$PageSizeRange = [10,25,50];

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
