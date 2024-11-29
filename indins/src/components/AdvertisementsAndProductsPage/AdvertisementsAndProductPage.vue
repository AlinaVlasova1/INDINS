<script lang="ts">

import {defineComponent} from "vue";
import AdvertisementBlock from "@/components/AdvertisementsBlock/AdvertisementBlock.vue";
import ProductsBlock from "@/components/ProductsBlock/ProductsBlock.vue";
import {IProduct} from "@/models/product-models";

export default defineComponent({
  name: "AdvertisementsAndProductPage",
  components: {ProductsBlock, AdvertisementBlock},
  methods: {
    addBasketProduct(product: IProduct) {
      this.$emit("addProduct", product);
    }
  },
  data() {
    return {
    }
  },
})
</script>

<template>
  <div class="advertisements-and-product-page">
    <AdvertisementBlock></AdvertisementBlock>
    <ProductsBlock v-on:addProduct="addBasketProduct"></ProductsBlock>
  </div>
</template>

<style>

  .advertisements-and-product-page {
    margin-top: 12px;
    margin-bottom: 100px;
  }
</style>