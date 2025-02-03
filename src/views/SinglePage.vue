<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="col-lg-10 offset-1">
        <!-- <img class="mb-4 w-100" src="../assets/img/2.jpg" alt="" /> -->
        <img
          class="mb-4 w-100"
          :src="require(`@/assets/img/${travelParams.image}`)"
          :alt="travelParams.image"
        />

        <h2>{{ travelParams.name }}</h2>
        <div class="description">{{ travelParams.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    travelName() {
      return this.$route.name;
    },
    travelParams() {
      console.log(this.$store.getters["getTravelsById"](this.$route.params.id));
      return this.$store.getters["getTravelsById"](this.$route.params.id);
    },
  },
};
</script>
