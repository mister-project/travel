<template>
  <!-- <div>
    <h1>Первая страница</h1>
    <router-link to="/single">Одинокая страница</router-link>;
  </div> -->

  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        <!-- <travel-card /> -->
        <travel-card v-for="trav in travels" :key="trav.id" :trav="trav" />
        <!-- v-for="trav in travels" :key="trav.id" :trav="trav"  -->

        <!-- <product-card
                v-for="card in coffee"
                :key="card.id"
                :card="card"
                classItem="shop__item"
                @onNavigate="navigate"
              /> -->

        <!-- <a href="single.html">
          <div class="item-wrapper d-flex flex-column">
            <h3>Три дня за Полярным кругом.</h3>
            <div class="description">
              Мурманск, охота за северным сиянием (с сентября по апрель) Завтрак
              в отеле для проживающих в отеле по программе. 09:00 Встреча с
              группой у отеля «Меридиан» на площади Пять Углов. Заезд в отель
              «Огни Мурманска». Переезд в поселок Териберка. Мы на целый день
              уедем в уже ставшую легендой Териберку. Магическая красота здешних
              мест завораживает любого путника. Экскурсия на водопад, каменный
              пляж «яйца драконов» (подвозка на снегоходе к месту начала
              экскурсии с декабря по апрель). Путешествие в северную сказку, где
              старые корабли видят сны о прошлом, водопад сверкает застывшими
              льдами, а пляж из «яиц драконов» поражает своим размахом.
              Мистические камни-сейды молчаливо хранят тысячелетние тайны, а
              взору предстают неповторимые и удивительные пейзажи! Обед
              традиционной кухни в ресторане. Свободное время. Возвращение в
              Мурманск. Трансфер к отелям «Огни Мурманска», «Меридиан». Отдых.
            </div>
          </div>
        </a> -->
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
};
</script>
