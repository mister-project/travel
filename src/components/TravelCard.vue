<template>
  <a href="/single">
    <div class="item-wrapper d-flex flex-column">
      <img :src="require(`@/assets/img/${trav.image}`)" class="mb-3" alt="" />
      <h3>{{ trav.name }}</h3>
      <div class="description">{{ trav.description }}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    trav: {
      type: Object,
      requared: false,
    },
  },
};
</script>
