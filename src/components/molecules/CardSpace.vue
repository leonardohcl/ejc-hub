<template>
  <v-skeleton-loader
    v-if="isLoading"
    :type="isTable ? 'list-item-two-line' : 'card'"
  />
  <v-card
    v-else
    :class="{ 'd-flex': isTable }"
    :rounded="!isTable"
    :density="isTable ? 'compact' : 'comfortable'"
    :variant="isTable ? 'tonal' : 'flat'"
  >
    <v-card-text
      class="d-flex align-md-center flex-wrap flex-md-row flex-column text-left"
    >
      <span class="text-h6">
        {{ card.name }}
      </span>
      <small class="text-caption text-grey ml-1">(#{{ number }})</small>
      <ExpansionDisplay
        v-if="showExpansionSet"
        :expansion="card.expansion"
        class="text-caption text-grey"
      />
      <RarirtyDisplay
        :rarity="card.rarity"
        :class="{ 'ml-md-auto': isTable, 'flex-1-1-100': !isTable }"
      />
    </v-card-text>
    <v-card-actions v-if="showStateToggler">
      <v-btn-group class="w-100 d-flex flex-no-wrap" density="compact">
        <v-btn
          class="flex-1-1-0"
          :color="getCardHave(number) ? 'deep-purple' : 'background'"
          @click="toggleHaveIt"
          >Troco</v-btn
        >
        <v-btn
          class="flex-1-1-0"
          :color="getCardWants(number) ? 'pink' : 'background'"
          @click="toggleWantIt"
          >Quero</v-btn
        >
      </v-btn-group>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
const MISSINGNO: Card = {
  name: "Missingno",
  number: "00000",
  expansion: ExpansionSet.PromoA,
  rarity: Rarity.Crown,
};
</script>

<script setup lang="ts">
import { ExpansionSet, Rarity, type Card } from "@/model/Card";
import { getCards } from "@/plugins/firebase";
import { useAppStore } from "@/stores/app";
import { useCardStore } from "@/stores/cards";
import { storeToRefs } from "pinia";

const props = defineProps({
  number: { type: String, required: true },
  showExpansionSet: {
    type: Boolean,
  },
  showStateToggler: {
    type: Boolean,
  },
  isTable: {
    type: Boolean,
  },
});

const appStore = useAppStore();
const { getCardHave, getCardWants } = storeToRefs(appStore);
const isLoading = ref(false);
const { getCard, saveCard } = useCardStore();

const toggleWantIt = () => {
  appStore.toggleWant(props.number);
};
const toggleHaveIt = () => {
  appStore.toggleHave(props.number);
};

const card = ref<Card>(MISSINGNO);

const loadCard = async (number: string): Promise<Card> => {
  const stored = getCard(number);
  if (stored) return stored;
  isLoading.value = true;
  const cards = await getCards({ number });
  isLoading.value = false;
  if (!cards.length) return MISSINGNO;
  saveCard(cards[0]);
  return cards[0];
};

const updateCard = async () => {
  card.value = await loadCard(props.number);
};

watch(() => props.number, updateCard);

onMounted(updateCard);
</script>
