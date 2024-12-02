<script lang="ts">


import {defineComponent} from "vue";
import {IProduct, IProductInBasket} from "@/models/product-models";

export default defineComponent({
  name: "BasketPage",
  props: ['productsInBasket'],
  data() {
    return {
      newArrayProductsInBasket: [] as IProductInBasket[]
    }
  },
  mounted() {
    this.productsInBasket.products.forEach((product: IProduct) => {
      if (this.newArrayProductsInBasket.find(el => el.title === product.title)) {
        const element = this.newArrayProductsInBasket.find(el => el.title === product.title);
        const index = element ? this.newArrayProductsInBasket.indexOf(element) : undefined;
        console.log('index', index);
        if (index !== undefined) {
          this.newArrayProductsInBasket[index].count = this.newArrayProductsInBasket[index]?.count + 1;
          this.newArrayProductsInBasket[index].cost = this.newArrayProductsInBasket[index].price * this.newArrayProductsInBasket[index]?.count
        }
      } else {
        this.newArrayProductsInBasket.push({
          ...product,
          count: 1,
          cost: product.price
        });
      }
    })
  }
})
</script>

<template>
  <div class="basket-page">
    <h1>Корзина</h1>
    <table class="table">
      <thead>
      <tr class="row">
        <th class="title">Товар</th>
        <th >Цена, руб</th>
        <th>Кол-во</th>
        <th>Сумма, руб</th>
        <th class="button-delete"></th>
      </tr>
      </thead>
      <tbody>
      <tr class="row" v-for="(product, index) in newArrayProductsInBasket" :key="index">
        <td>{{product.title}}</td>
        <td>{{product.price}}</td>
        <td>{{product.count}}</td>
        <td>{{product.cost}}</td>
        <td><img src="../../assets/trash_bin.svg" alt="trash_bin">
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<style>
  .basket-page {
    margin-top: 12px;
    margin-bottom: 100px;

    .table {
      width: 100%;
      border-collapse: collapse;

      .row {

        text-align: left;
        border: 2px solid #275742;


        .title {
          width: 504px;
        }


        .button-delete {
          width: 75px;
        }

        th {
          padding-left: 16px;
          padding-top: 20px;
          padding-bottom: 20px;
          font-weight: 700;
          font-size: 22px;
          color: #275742;
        }

        td {
          padding-left: 16px;
          padding-top: 20px;
          padding-bottom: 20px;
          font-weight: 500;
          font-size: 22px;
          color: #275742;
        }
      }

    }
  }
</style>