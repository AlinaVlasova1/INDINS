<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "FooterBlock",
  components: {},
  data() {
    return {
    }
  },
})
</script>

<template>
  <footer class="footer">
    <h2>Штуки</h2>
    <nav class="nav-menu">
      <ul>
        <li><a>Главная</a></li>
        <li><a>Магазин</a></li>
      </ul>
    </nav>
    <button class="footer-button">Напиши нам</button>
  </footer>
</template>

<style>

  .footer {
    width: 100%;
    background-color: #275742;
    height: 124px;
    display: block;
    color: #FFFF;
    text-align: left;
    position: relative;
    border: 2px solid #275742;

    h2 {
      display: inline-block;
      width: 107px;
      font-weight: 700;
      font-size: 32px;
      text-align: left;
      line-height: 35px;
      margin: 43px 0 0 24px;
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

    .footer-button {
      position: absolute;
      padding: 16px 12px;
      border: 2px solid #ffff;
      background-color: #275742;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      line-height: 20px;
      top: 33px;
      right: 24px;
      left: auto;
    }
  }
</style>