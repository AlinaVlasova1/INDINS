import Vue from 'vue'
import App from "@/App.vue";
import Router from "vue-router";
import AdvertisementsAndProductPage from "@/components/AdvertisementsAndProductsPage/AdvertisementsAndProductPage.vue";
import MainPage from "@/components/MainPage/MainPage.vue";
import  BasketPage from "@/components/BasketPage/BasketPage.vue"
import {RouteConfig} from "vue-router/types/router";
import {Component} from "@/router";



Vue.config.productionTip = false
Vue.use(Router);



const routes: RouteConfig[] = [
  {path: '/', name: 'MainPage', component: MainPage, children: [
      { path: '', name: 'AdvertisementsAndProductPage' , component: AdvertisementsAndProductPage},
      { path: '/basket', name: 'BasketPage', component: BasketPage as Component}
    ]},
]

const router:Router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

