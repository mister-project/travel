<template>
  <!-- <div>
    <h1>Первая страница</h1>
    <router-link to="/single">Одинокая страница</router-link>;
  </div> -->

  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        <!-- <travel-card /> -->
        <travel-card
          v-for="trav in travels"
          :key="trav.id"
          :trav="trav"
          @transitTravelPage="getIdTrav"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import SinglePage from "./SinglePage.vue";
import travels from "@/store/travels";
import TravelCard from "@/components/TravelCard.vue";

export default {
  components: { SinglePage, TravelCard },
  computed: {
    travels() {
      return this.$store.getters["getTravels"];
    },
  },
  methods: {
    getIdTrav(id) {
      // console.log(id);
      this.$router.push({ name: "travels", params: { id: id } });
    },
  },
};
</script>
