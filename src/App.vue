<script setup>
import {RouterLink, RouterView} from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="news-body">
    <Header class="news-header"/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<style scoped>
.news-body {
  background-color: #f2f0f0;
}

.news-header {
  background-color: #ed5e42;
  width: auto;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 0 0 0;
}
</style>
