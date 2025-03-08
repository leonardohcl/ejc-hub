<template>
  <v-row v-if="isLoading" :no-gutters="isTable">
    <v-col
      v-for="_ in pageSize"
      :cols="isTable ? 12 : 6"
      :md="isTable ? 12 : 4"
      :xl="isTable ? 12 : 3"
    >
      <v-skeleton-loader
        :type="isTable ? 'list-item-two-line' : 'card'"
      ></v-skeleton-loader>
    </v-col>
  </v-row>
  <v-row v-else :no-gutters="isTable">
    <v-col
      v-for="(card, idx) in cardPage"
      :cols="isTable ? 12 : 6"
      :md="isTable ? 12 : 4"
      :xl="isTable ? 12 : 3"
      :key="card.number"
    >
      <CardSpace
        v-bind="card"
        show-state-toggler
        :is-table="isTable"
        :color="isTable ? (idx % 2 == 0 ? 'white-darken-1' : 'grey') : ''"
      />
    </v-col>
    <v-col cols="12" v-if="!cardList.length">
      <v-empty-state
        title="Não tem nada aqui"
        text="Talvez seja melhor dar uma olhada nos seus filtros"
      />
    </v-col>
    <v-col cols="12">
      <v-pagination v-model="page" :length="pageCount || 1" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ExpansionSet, type Card, type Rarity } from "@/model/Card";
import type { Dictionary } from "@/model/Dictionary";
import { getCards } from "@/plugins/firebase";
import { useCardStore } from "@/stores/cards";
import type { PropType } from "vue";

const props = defineProps({
  expansion: {
    type: Number as PropType<ExpansionSet>,
    default: ExpansionSet.PromoA,
  },
  rarityFilter: {
    type: Array<Rarity>,
  },
  sortBy: {
    type: String as PropType<"name" | "rarity" | "number">,
    default: "number",
  },
  pageSize: {
    type: Number,
    default: 12,
  },
  display: {
    type: String as PropType<"table" | "binder">,
    default: "binder",
  },
});

const cardStore = useCardStore();
const isTable = computed(() => props.display === "table");

const cardList = ref<Array<Card>>([]);
const isLoading = ref(false);

const totalCards = computed(() => filteredCardList.value.length);

const page = ref(1);
const pageCount = computed(() => {
  return Math.ceil(totalCards.value / props.pageSize);
});

const cardPage = computed(() => {
  const start = (page.value - 1) * props.pageSize;
  const end = start + props.pageSize;
  return filteredCardList.value
    .sort((a: Dictionary, b: Dictionary) =>
      a[props.sortBy] < b[props.sortBy] ? -1 : 1
    )
    .slice(start, end);
});

const filteredCardList = computed(() =>
  cardList.value.filter(
    (x) => (props.rarityFilter?.indexOf(x.rarity) ?? -1) >= 0
  )
);

const loadCards = async () => {
  const query = {
    expansion: [props.expansion],
  };
  const cached = cardStore.getQuery(query);
  if (!cached) {
    isLoading.value = true;
    const cards = await getCards(query);
    cardStore.saveQuery(query, cards);
    cards.forEach((x) => {
      cardStore.saveCard(x);
    });
    cardList.value = cards;
    isLoading.value = false;
  } else {
    cardList.value = cached;
  }
};

onMounted(async () => {
  loadCards();
});
</script>
