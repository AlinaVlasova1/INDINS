<script lang="ts">

import {defineComponent, reactive} from "vue";
import {ProductService} from "@/services/products-service";
import {IProduct, IResponseProducts} from "@/models/product-models";
import ProductCard from "@/components/ProductCard/ProductCard.vue";
import ProductPage from "@/components/ProductPage/ProductPage.vue";

export default defineComponent({
  name: "ProductsBlock",
  components: {ProductPage, ProductCard},
  setup() {
    const productSelected = reactive({id: null as number | null});
    return {
      productSelected
    }
  },
  data() {
    return {
      arrDisplayProducts: [] as IProduct[],
      productService: new ProductService(),
      isModalWindowTriggered: false as boolean,
    }
  },
  methods: {
    addBasketProduct(product: IProduct) {
      console.log("addBasketProduct ", product);
      this.$emit("addProduct", product);
    },
    openModal(id: number) {
      console.log("openModal", id);
      this.isModalWindowTriggered = true;
      this.productSelected.id = id;
    }
  },
  created() {
    this.productService.getAllProducts().then((products: IResponseProducts) => {
      this.arrDisplayProducts = products.data;
    })
  }
})
</script>

<template>
  <div class="product-block">
    <h1>Новинки</h1>
    <div class="products">
      <div class="product" v-for="(product, index) in arrDisplayProducts" :key="index">
        <ProductCard
            :product="product"
            v-on:addBasket="addBasketProduct"
            v-on:openModalProduct="openModal"></ProductCard>
      </div>
    </div>
    <ProductPage
        v-if="isModalWindowTriggered"
        :productId="productSelected.id"
        v-on:addProduct="addBasketProduct"
        v-on:close="isModalWindowTriggered = false"></ProductPage>
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