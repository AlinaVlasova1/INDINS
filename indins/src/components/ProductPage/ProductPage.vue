<script lang="ts">

import {defineComponent, reactive} from "vue";
import {ProductService} from "@/services/products-service";
import {IProduct, IResponseProduct} from "@/models/product-models";

export default defineComponent({
  name: "ProductPage",
  props: ['productId'],
  setup() {
    const productObj = reactive({product: {} as IProduct});
    return {
      productObj
    }
  },
  data() {
    return {
      productService: new ProductService(),
      product: {} as IProduct
    }
  },
  created() {
    this.productService.getProductById(this.productId).then((product: IResponseProduct) => {
      console.log('products',product);
      this.productObj.product = product.data;
      this.product = product.data;
      // Object.assign(this.productObj.product, product.data)
      // Object.assign(this.product, product.data)
      console.log('this.product',this.productObj.product);
    }
    )
  }
})
</script>

<template>
<div class="pop-up">
  <div class="pop-up-inner">
    <div class="title">
      <h1>{{product.title}}</h1>
    </div>
    <div>
      <div class="left-pop-inner-block">
        <img v-bind:src="product.image" alt="img"/>
      </div>
      <div class="right-pop-inner-block">
        <span>{{product.description}}</span>
        <span>{{productObj.product.category}}</span>
        <span>{{productObj.product.rating?.rate}}</span>
        <span>{{productObj.product.price}}</span>
      </div>
    </div>
  </div>
  </div>
</template>

<style>

.pop-up {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(10, 31, 56, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

}

.pop-up-inner {
  background: white;
  width: 780px;
  height: 672px;
  font-family: Montserrat, sans-serif;
  text-align: left;

  .title {
    height: 122px;
    width: 100%;
    background-color: #275742;

    h1 {
      color: white;
    }
  }
}
</style>