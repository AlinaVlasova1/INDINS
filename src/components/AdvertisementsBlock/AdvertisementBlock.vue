<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "AdvertisementBlock",
  components: {},
})
</script>

<template>
  <div class="advertisement-block">
    <div class="left-block">
      <h3>Смотри внимательно сколько всего у нас есть</h3>
      <h1>Магазин очень нужных штуковин</h1>
    </div>
    <div class="right-block">
      <img src="../../assets/plants.svg" alt="plants">
    </div>
  </div>
</template>

<style>

  .advertisement-block {
    background: #275742;
    height: 573px;
    display: flex;

    .left-block {
      display: inline-block;
      margin-left: 40px;

      h3 {
        width: 324px;
        font-weight: 400;
        color: white;
        font-size: 24px;
        text-align: left;
        margin-bottom: 253px;
      }

      h1 {
        width: 710px;
        font-weight: 400;
        color: white;
        font-size: 78px;
        text-align: left;
      }
    }

    .right-block {
      margin-right: 40px;
      margin-left: auto;
      img {
        margin-top: 36px;
      }
    }
  }

</style>