<template>
  <div class="item-wrapper d-flex flex-column" @click="getIdCard(trav.id)">
    <img
      :src="require(`@/assets/img/${trav.image}`)"
      class="mb-3"
      :alt="trav.image"
    />
    <h3>{{ trav.name }}</h3>
    <div class="description">
      {{ trav.description | cutDescription }}<span> Читать далее ...</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trav: {
      type: Object,
      requared: false,
    },
  },
  filters: {
    cutDescription(value) {
      return value.slice(0, 400);
    },
  },
  methods: {
    getIdCard(id) {
      //метод для получения идентификатора товара внутри карты и вывода его куда нужно
      // console.log(id);
      this.$emit("transitTravelPage", id); //создание кастомного события для перехода ни динамическую страницу одного путешествия
    },
  },
};
</script>
