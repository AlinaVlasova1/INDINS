<script lang="ts">


import {defineComponent} from "vue";

export default defineComponent({
  name: "ProductCard",
  props: ['product'],
  components: {},
  methods: {
    openModalProduct() {
      this.$emit("openModalProduct", this.product.id);
    }
  },
})
</script>

<template>
  <div class="product-card">
    <div  @click="openModalProduct()">
      <div class="img-content">
        <img v-bind:src="product.image" alt="product">
      </div>
      <span class="card-title">{{product.title}}</span>
    </div>
    <button class="button-buy" @click="$emit('addBasket', product)">Купить</button>
  </div>
</template>

<style>
  .product-card {
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    .img-content {
      height: 380px;
      width: auto;

      img {
        height: 380px;
        width: auto;
        max-width: 100%;
        text-align: center;
      }
    }

    .card-title {
      font-weight: 500;
      font-size: 25px;
      color: #275742;
      height: 57px;
      display: inline-block;
      margin-bottom: 16px;
      margin-top: 16px;
    }

    .button-buy {
      border: 2px solid #275742;
      width: 100%;
      height: 44px;
      background-color: white;
      color: #275742;
    }

    .button-buy:hover {
      background-color: #275742;
      color: #fff;
    }

  }
</style>