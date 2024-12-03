<script lang="ts">


import {defineComponent} from "vue";
import {IProduct, IProductInBasket} from "@/models/product-models";

export default defineComponent({
  name: "BasketPage",
  props: ['productsInBasket'],
  data() {
    return {
      newArrayProductsInBasket: [] as IProductInBasket[],
      allCountProduct: 0 as number,
      allCostProduct: 0 as number
    }
  },
  methods: {
    calculate() {
      this.allCountProduct = 0;
      this.allCostProduct = 0;
      this.newArrayProductsInBasket.forEach((product: IProductInBasket) => {
        this.allCountProduct = this.allCountProduct + product.count;
        this.allCostProduct = this.allCostProduct + product.cost;
      })
    },
    deleteProduct(id: number) {
      const element = this.newArrayProductsInBasket.find((el) => el.id === id);
      const index = element ? this.newArrayProductsInBasket.indexOf(element) : undefined;
      if (index !== undefined) {
        this.$emit("deleteProduct", {id: id, count: this.newArrayProductsInBasket[index].count});
        this.newArrayProductsInBasket.splice(index, 1);
      }
      this.calculate();

    }
  },
  mounted() {
    this.productsInBasket.products.forEach((product: IProduct) => {
      if (this.newArrayProductsInBasket.find(el => el.id === product.id)) {
        const element = this.newArrayProductsInBasket.find(el => el.id === product.id);
        const index = element ? this.newArrayProductsInBasket.indexOf(element) : undefined;
        if (index !== undefined) {
          this.newArrayProductsInBasket[index].count = this.newArrayProductsInBasket[index].count + 1;
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
    this.calculate();
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
        <th>Цена, руб</th>
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
        <td><img src="../../assets/trash_bin.svg" alt="trash_bin"  @click="deleteProduct(product.id)"></td>
      </tr>
      </tbody>
      <tfoot>
      <tr class="row">
        <th class="title">Итог</th>
        <th></th>
        <th>{{allCountProduct}}</th>
        <th>{{allCostProduct.toFixed(2)}}</th>
        <th></th>
      </tr>
      </tfoot>
    </table>
    <button class="buy-all">Плачу за всё!</button>
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

    .buy-all {
      width: 332px;
      height: 52px;
      background-color: #275742;
      color: white;
      font-weight: 500;
      font-size: 24px;
      margin-top: 60px;
      margin-right: 0;
      margin-left: auto;
      display: block;
    }
  }
</style>