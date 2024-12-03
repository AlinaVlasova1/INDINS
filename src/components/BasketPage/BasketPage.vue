<script lang="ts">


import {defineComponent} from "vue";
import {IPlacementInBasket} from "@/models/product-models";

export default defineComponent({
  name: "BasketPage",
  props: ['placementsInBasket'],
  data() {
    return {
      totalPlacementCount: 0 as number,
      totalPlacementCost: 0 as number
    }
  },
  methods: {
    calculate() {
      this.totalPlacementCount = 0;
      this.totalPlacementCost = 0;
      this.placementsInBasket.placements.forEach((product: IPlacementInBasket) => {
        this.totalPlacementCount = this.totalPlacementCount + product.count;
        this.totalPlacementCost = this.totalPlacementCost + product.cost;
      })
    },
    deleteProduct(id: number) {
      this.$emit("deleteProduct", id);
      this.calculate();

    }
  },
  mounted() {
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
      <tr class="row" v-for="(placement, index) in placementsInBasket.placements" :key="index">
        <td>{{placement.product.title}}</td>
        <td>{{placement.product.price}}</td>
        <td>{{placement.count}}</td>
        <td>{{placement.cost}}</td>
        <td><img src="../../assets/trash_bin.svg" alt="trash_bin"  @click="deleteProduct(placement.product.id)"></td>
      </tr>
      </tbody>
      <tfoot>
      <tr class="row">
        <th class="title">Итог</th>
        <th></th>
        <th>{{ totalPlacementCount }}</th>
        <th>{{ totalPlacementCost.toFixed(2) }}</th>
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