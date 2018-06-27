// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview';
import VueRouter from 'vue-router';
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css';
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.use(VueRouter);
Vue.use(iView);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish();
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
