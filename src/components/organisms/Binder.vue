<template>
  <v-row v-if="isLoading">
    <v-col v-for="_ in pageSize" cols="6" md="4" xl="3">
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col v-for="card in cardPage" cols="6" md="4" xl="3" :key="card.number">
      <CardSpace v-bind="card" show-state-toggler />
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
import { storeToRefs } from "pinia";
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
});

const cardStore = useCardStore();
const { getQuery } = storeToRefs(cardStore);

const cardList = ref<Array<Card>>([]);
const isLoading = ref(false);

const totalCards = computed(() => filteredCardList.value.length);

const page = ref(1);
const pageSize = ref(12);
const pageCount = computed(() => {
  return Math.ceil(totalCards.value / pageSize.value);
});

const cardPage = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  const end = start + pageSize.value;
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
  const cached = getQuery.value(query);
  if (!cached) {
    isLoading.value = true;
    cardList.value = await getCards(query);
    cardStore.saveQuery(query, cardList.value)
    isLoading.value = false;
  } else {
    cardList.value = cached;
  }
};

onMounted(async () => {
  loadCards();
});
</script>
