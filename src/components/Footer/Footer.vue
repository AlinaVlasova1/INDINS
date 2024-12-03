<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "FooterBlock",
  components: {},
})
</script>

<template>
  <footer class="footer">
    <h2>Штуки</h2>
    <nav class="nav-menu">
      <ul>
        <li><router-link to="/home">Главная</router-link></li>
        <li><router-link to="/basket">Магазин</router-link></li>
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
    display: flex;
    color: #FFFF;
    text-align: left;
    position: relative;

    h2 {
      display: inline-block;
      width: 107px;
      font-weight: 700;
      font-size: 32px;
      text-align: left;
      line-height: 35px;
      margin: 43px 0 0 24px;
    }

    .nav-menu {
      display: inline-block;
      height: 100%;
      width: 250px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }

    ul {
      list-style: none;
      display: flex;
      width: 250px;
      vertical-align: middle;
      justify-content: center;
      padding-left: 0;
      margin-top: auto;
      margin-bottom: auto;
      height: 100%;
      align-items: center;

      li {
        display: inline-block;
        vertical-align: middle;


        a, a:visited, a:hover, a:active {
          font-weight: 500;
          font-size: 20px;
          text-decoration: none;
          color: inherit;
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