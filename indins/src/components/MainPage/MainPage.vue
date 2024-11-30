<script lang="ts">

import { defineComponent, reactive} from "vue";
import AdvertisementsAndProductPage from "@/components/AdvertisementsAndProductsPage/AdvertisementsAndProductPage.vue";
import HeaderBlock from "@/components/Header/Header.vue";
import FooterBlock from "@/components/Footer/Footer.vue";
import {IProduct} from "@/models/product-models";


export default defineComponent({
  name: "MainPage",
  components: {FooterBlock, HeaderBlock, AdvertisementsAndProductPage},
  setup() {
    const productsInBasket = reactive({products: [] as IProduct[]});
    return {
      productsInBasket,
    }
  },
  methods: {
    addBasketProduct(product: IProduct) {
      this.productsInBasket.products.push(product);
    }
  },
})
</script>

<template>
  <div class="main-page">
    <HeaderBlock :productsInBasket="productsInBasket"></HeaderBlock>
    <AdvertisementsAndProductPage v-on:addProduct="addBasketProduct"></AdvertisementsAndProductPage>
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