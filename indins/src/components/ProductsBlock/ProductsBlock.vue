<script lang="ts">

import {defineComponent} from "vue";
import {ProductService} from "@/services/products-service";
import {IProduct, IResponseProducts} from "@/models/product-models";
import ProductCard from "@/components/ProductCard/ProductCard.vue";

export default defineComponent({
  name: "ProductsBlock",
  components: {ProductCard},
  data() {
    return {
      arrDisplayProducts: [] as IProduct[],
      productService: new ProductService()
    }
  },
  methods: {
    addBasketProduct(product: IProduct) {
      this.$emit("addProduct", product);
    }
  },
  created() {
    this.productService.getAllProducts().then((products: IResponseProducts) => {
      console.log('products',products);
      this.arrDisplayProducts = products.data;
    })
  }
})
</script>

<template>
  <div class="product-block">
    <h1>Новинки</h1>
    <div class="products" >
      <div class="product" v-for="(product, index) in arrDisplayProducts" :key="index">
        <ProductCard :product="product" v-on:addBasket="addBasketProduct"></ProductCard>
      </div>
    </div>
  </div>
</template>

<style>
  .product-block {

    h1 {
      font-weight: 500;
      font-size: 40px;
      color: #275742;
    }

    .products {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 32px;
      margin-top: 40px;

      .product {
        display: block;
        width: 100%;
      }
    }
  }
</style>