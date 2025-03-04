<template>
  <v-card>
    <v-card-text>
      <span class="text-h6">
        {{ name }}
        <small class="text-caption text-grey ml-1">(#{{ number }})</small>
        <br />
      </span>
      <template v-if="showExpansionSet">
        <ExpansionDisplay
          :expansion="expansion"
          class="text-caption text-grey"
        />
        <br />
      </template>
      <RarirtyDisplay :rarity="rarity" />
    </v-card-text>
    <v-card-actions v-if="showStateToggler">
      <v-btn-group class="w-100 d-flex flex-nowrap">
        <v-btn
          class="flex-1-1-0"
          :color="getCardHave(number) ? 'primary' : ''"
          @click="toggleHaveIt"
          >Troco</v-btn
        >
        <v-btn
          class="flex-1-1-0"
          :color="getCardWants(number) ? 'warning' : ''"
          @click="toggleWantIt"
          >Quero</v-btn
        >
      </v-btn-group>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ExpansionSet, Rarity } from "@/model/Card";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
import type { PropType } from "vue";

const props = defineProps({
  name: { type: String },
  number: { type: String, required: true },
  expansion: { type: Number as PropType<ExpansionSet> , required: true },
  rarity: { type: Number as PropType<Rarity>, required: true  },
  showExpansionSet: {
    type: Boolean,
  },
  showStateToggler: {
    type: Boolean,
  },
});

const store = useAppStore();
const { getCardHave, getCardWants } = storeToRefs(store);

const toggleWantIt = () => {
  store.toggleWant(props.number)
};
const toggleHaveIt = () => {
  store.toggleHave(props.number)
};
</script>
