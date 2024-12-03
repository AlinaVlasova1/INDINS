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
  methods: {
    addBasketProduct() {
      this.$emit("addProduct", this.product);
      this.$emit('close');
    }
  },
  created() {
    this.productService.getProductById(this.productId).then((product: IResponseProduct) => {
      this.productObj.product = product.data;
      this.product = product.data;
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
      <div class="cross">
        <img src="../../assets/cross.svg" alt="cross" @click="$emit('close')">
      </div>
    </div>
    <div class="info">
      <div class="left-pop-inner-block">
          <img v-bind:src="product.image" alt="img"/>
      </div>
      <div class="right-pop-inner-block">
        <div class="info-second">
          <span class="title-second">Описание</span>
          <span class="description">{{product.description}}</span>
        </div>
        <div class="info-second">
          <span class="title-second">Категория</span>
          <span class="description">{{productObj.product.category}}</span>
        </div>
        <div class="info-second">
          <span class="title-second">Рейтинг</span>
          <span class="description">{{productObj.product.rating?.rate}}</span>
        </div>
        <span class="price">{{productObj.product.price}} руб.</span>
        <button class="button-modal-buy" @click="addBasketProduct()">Купить</button>
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
  width: 954px;
  height: 682px;
  text-align: left;

  .title {
    width: 100%;
    background-color: #275742;
    padding-top: 41px;
    padding-bottom: 41px;
    display: flex;
    vertical-align: top;

    h1 {
      color: white;
      font-weight: 700;
      font-size: 32px;
      margin: 0 0 0 40px;
      width: 754px;
      display: inline-block;
      vertical-align: top;
    }

    .cross {
      display: inline-block;
      vertical-align: top;
      margin-right: 40px;
      margin-left: auto;
    }
  }

  .info {
    display: flex;

    .left-pop-inner-block {

      width: 542px;
      height: 519px;
      display: flex;

      img {
        width: auto;
        height: auto;
        max-height: 439px;
        max-width: 462px;
        margin: 40px auto;
      }
    }

    .right-pop-inner-block {
      width: 394px;
      height: 479px;
      margin-top: 40px;
      margin-right: 40px;

      .info-second {
        display: block;
        width: 372px;
        color: #275742;
        font-weight: 500;
        font-size: 24px;

        .title-second {
          display: block;
          color: #606462;
          font-size: 20px;
          font-weight: 500;
          margin-top: 8px;
        }

        .description {
          max-height: 140px;
          display: block;
          overflow-y: auto;
        }
      }

      .price {
        color: #275742;
        font-weight: 700;
        font-size: 36px;
        margin-top: 31px;
        display: block;

      }

      .button-modal-buy {
        background-color: #275742;
        color: white;
        width: 100%;
        height: 52px;
        font-weight: 500;
        font-size: 24px;
        margin-top: 24px;
      }
    }
  }


}
</style>