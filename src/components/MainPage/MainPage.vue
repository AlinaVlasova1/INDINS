<script lang="ts">

import { defineComponent, reactive} from "vue";
import HeaderBlock from "@/components/Header/Header.vue";
import FooterBlock from "@/components/Footer/Footer.vue";
import {IPlacementInBasket, IProduct} from "@/models/product-models";


export default defineComponent({
  name: "MainPage",
  components: {FooterBlock, HeaderBlock},
  setup() {
    const placementsInBasket = reactive({placements: [] as IPlacementInBasket[]});
    return {
      placementsInBasket,
    }
  },
  methods: {
    addBasketProduct(product: IProduct) {
      const findedEl = this.placementsInBasket.placements.find((el) => el.product.id === product.id)
      if (findedEl) {
        findedEl.count = findedEl.count + 1;
        findedEl.cost = findedEl.count * findedEl.product.price;
      } else {
        this.placementsInBasket.placements.push({
          product: product,
          count: 1,
          cost: product.price
        });
      }
    },
    deleteProductsById( id: number) {
      this.placementsInBasket.placements = [...this.placementsInBasket.placements.filter((el) => el.product.id !== id)]
    },
  },
})
</script>

<template>
  <div class="main-page">
    <HeaderBlock :placementsInBasket="placementsInBasket"></HeaderBlock>
    <router-view v-on:addProduct="addBasketProduct"
                 :placementsInBasket="placementsInBasket"
                 v-on:deleteProduct="deleteProductsById"></router-view>
    <FooterBlock></FooterBlock>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  .main-page {
    height: 100%;
    padding: 24px 40px;
    font-family: "Ubuntu", sans-serif;
  }
</style>