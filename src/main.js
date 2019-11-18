import Vue from 'vue'
import App from './App.vue'
// import Router from 'vue-router';
// import router from './router'

Vue.config.productionTip = false

// Vue.use(Router);

new Vue({
  render: h => h(App),
}).$mount('#app') 

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: App
//     }
//   ]
// })

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

Vue.config.debug = true; 
Vue.config.devtools = true;
