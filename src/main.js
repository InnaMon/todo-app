import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
// import ourRoutes from './our-routes.js';

Vue.config.productionTip = false

Vue.use(VueRouter);

// We create the router instance here.
// const router = new VueRouter({
//   routes: ourRoutes
// });

new Vue({
  render: h => h(App),
}).$mount('#app') 

Vue.config.debug = true; 
Vue.config.devtools = true;
