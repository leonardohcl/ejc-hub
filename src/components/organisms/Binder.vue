<template>
  <v-row>
    <v-col
      v-for="card in currentCardPage"
      cols="6"
      md="4"
      xl="3"
      :key="card.number"
    >
      <CardSpace v-bind="card" show-state-toggler />
    </v-col>
    <v-col cols="12" v-if="!currentCardPage.length">
      <v-empty-state
        title="Não tem nada aqui"
        text="Talvez seja melhor dar uma olhada nos seus filtros"
      />
    </v-col>
    <v-col cols="12">
      <v-pagination v-model="page" :length="pageCount" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import type { Card, Rarity } from "@/model/Card";
import type { Dictionary } from "@/model/Dictionary";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
import type { PropType } from "vue";

const store = useAppStore();
const { getCardHave, getCardWants } = storeToRefs(store);

const props = defineProps({
  cardList: {
    type: Array<Card>,
    required: true,
  },
  hideHaves: {
    type: Boolean,
  },
  hideWants: {
    type: Boolean,
  },
  hideUnsawered: {
    type: Boolean,
  },
  rarityFilter: {
    type: Array<Rarity>,
  },
  sortBy: {
    type: String as PropType<"alphabetical" | "rarity" | "number">,
    default: "alphabetical",
  },
});

const sortProperty = computed(
  () =>
    ({
      alphabetical: "name",
      rarity: "rarity",
      number: "number",
    }[props.sortBy])
);

const displayedCards = computed(() =>
  props.cardList
    .filter((card) => {
      if (props.hideHaves && getCardHave.value(card.number)) return false;
      if (props.hideWants && getCardWants.value(card.number)) return false;
      if (
        props.hideUnsawered &&
        !getCardHave.value(card.number) &&
        !getCardWants.value(card.number)
      )
        return false;
      if (props.rarityFilter && props.rarityFilter.length > 0) {
        return props.rarityFilter.indexOf(card.rarity) >= 0;
      }
      return true;
    })
    .sort((a: Dictionary, b: Dictionary) => {
      if (a[sortProperty.value] > b[sortProperty.value]) {
        return 1;
      } else {
        return -1;
      }
    })
);

const page = ref(1);
const pageSize = ref(12);
const pageCount = computed(() => {
  return Math.ceil(displayedCards.value.length / pageSize.value);
});
const currentCardPage = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return displayedCards.value.slice(start, end);
});
</script>
