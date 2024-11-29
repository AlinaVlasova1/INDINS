import Vue from 'vue'
import App from "@/App.vue";
import Router from "vue-router";


Vue.config.productionTip = false
Vue.use(Router);



const routes = [
  { path: '/', name: 'MainPage' },
  { path: '/main', name: 'AdvertisementsAndProductPage' },
  { path: '/product', name: 'ProductPage' },
  { path: '/basket', name: 'BasketPage'},
]

const router:Router = new Router({
  mode: "history",
  routes: routes // short for `routes: routes`
})
// const router = new VueRouter({
//   routes // short for `routes: routes`
// })
// const app = new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

