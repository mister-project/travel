<template>
  <!-- <a href="/single"> -->
  <div class="item-wrapper d-flex flex-column" @click="getIdCard(trav.id)">
    <img :src="require(`@/assets/img/${trav.image}`)" class="mb-3" alt="" />
    <h3>{{ trav.name }}</h3>
    <div class="description">{{ trav.description }}</div>
  </div>
  <!-- </a> -->
</template>

<script>
export default {
  props: {
    trav: {
      type: Object,
      requared: false,
    },
  },
  methods: {
    getIdCard(id) {
      //метод для получения идентификатора товара внутри карты и вывода его куда нужно
      console.log(id);
      this.$emit("transitTravelPage", id); //создание кастомного события для перехода ни динамическую страницу одного путешествия
    },
  },
};
</script>
