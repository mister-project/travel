<template>
  <div id="app">
    <!-- <h1>Сайт Путешествий, Ёпта</h1> -->
    <router-view></router-view>
  </div>
</template>

<script>
import IndexPage from "./views/IndexPage.vue";
import TravelCard from "./components/TravelCard.vue";
export default {
  comments: { IndexPage, TravelCard },
};
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
</script>

<style></style>
