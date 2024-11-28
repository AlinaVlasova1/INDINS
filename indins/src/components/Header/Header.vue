<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HeaderBlock",
  components: {},
  data() {
    return {
    }
  },
})
</script>

<template>
  <header class="header">
    <h2>Штуки</h2>
    <nav class="nav-menu">
      <ul>
        <li><a>Главная</a></li>
        <li><a>Магазин</a></li>
      </ul>
    </nav>
    <div class="basket">
      <img src="../../assets/shopping_cart.svg" alt="shopping_cart" />
    </div>
  </header>
</template>

<style>

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

    .basket::after {
      content: "";
      width: 16px;
      height: 16px;
      background-color: #C95103;
      border-radius: 8px;
    }
  }

</style>