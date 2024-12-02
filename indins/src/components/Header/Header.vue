<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HeaderBlock",
  components: {},
  props: ['productsInBasket'],
  methods: {
    routeInBasket() {
      this.$router.push({path: '/basket'});
    }
  }
})
</script>

<template>
  <header class="header">
    <h2>Штуки</h2>
    <nav class="nav-menu">
      <ul>
<!--        <li><a>Главная</a></li>-->
<!--        <li><a>Магазин</a></li>-->
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/basket">Магазин</router-link></li>
      </ul>
    </nav>
    <div class="basket" @click="routeInBasket()">
      <img src="../../assets/shopping_cart.svg" alt="shopping_cart" />
      <div v-if="productsInBasket.products.length > 0" class="red-circle inherit">{{productsInBasket.products.length}}</div>
    </div>
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet');

  .inherit{
    font-family: "Ubuntu", serif;
  }

  .header {
    border: 2px solid #275742;
    width: 100%;
    height: 64px;
    display: block;
    color: #275742;
    text-align: left;
    position: relative;
    box-sizing: border-box;

    h2 {
      display: inline-block;
      width: 107px;
      font-weight: 700;
      font-size: 32px;
      text-align: left;
      line-height: 35px;
      margin: 13px 0 0 24px;
    }

    nav {
      display: inline-block;
      height: 100%;
      margin-left: 35%;
    }

    ul {
      list-style: none;
      display: inline-block;
      width: 250px;
      margin-top: 0;
      margin-bottom: 0;

      li {
        display: inline-block;

        a {
          font-weight: 500;
          font-size: 20px;
          text-decoration: none;
        }
      }

      li:first-child {
        margin-right: 32px;
      }
    }

    .basket {
      position: absolute;
      display: inline-block;
      top: 12px;
      bottom: auto;
      right: 24px;
      left: auto;
    }

    .red-circle {
      position: relative;
      width: 16px;
      height: 16px;
      background-color: #C95103;
      border-radius: 8px;
      top: -40px;
      left: 22px;
      color: white;
      text-align: center;
      font-size: 10px;
      font-weight: 500;
      line-height: 15px;
    }
  }

</style>