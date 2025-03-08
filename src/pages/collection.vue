<template>
  <v-container class="relative">
    <v-banner
      v-if="!getUsername"
      class="mb-2"
      icon="mdi-alert"
      color="warning"
      sticky
      style="top: 60px"
    >
      <v-banner-text>
        <b>Opa!</b><br />
        Parece que você ainda não registrou seu nome no jogo. Sem essas
        informações não será possível salvar sua coleção
      </v-banner-text>
      <v-banner-actions>
        <v-btn tag="router-link" to="settings"> Registrar </v-btn>
      </v-banner-actions>
    </v-banner>
    <v-tabs v-model="tab">
      <v-tab
        v-for="expansionSet in binders"
        :key="expansionSet"
        :value="expansionSet"
      >
        <ExpansionDisplay :expansion="+expansionSet" />
      </v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="expansionSet in binders"
        :key="expansionSet"
        :value="expansionSet"
      >
        <Binder
          :rarity-filter="rarityFilter"
          :expansion="+expansionSet"
          :sort-by="sortBy"
          :page-size="pageSize"
          :display="exibitionMode"
        />
      </v-tabs-window-item>
    </v-tabs-window>

    <v-navigation-drawer class="py-3" location="right" :permanent="mdAndUp" v-model="isDrawerOpen">
      <v-list-item title="Filtros" subtitle="Raridade">
        <v-chip-group
          v-model="rarityFilter"
          class="h-auto flex-wrap"
          color="secondary"
          multiple
          column
          variant="text"
        >
          <v-chip v-for="opt in rarityOptions" :key="opt" :value="opt">
            <RarirtyDisplay :rarity="opt" />
          </v-chip>
        </v-chip-group>
      </v-list-item>
      <v-divider class="my-3" />
      <v-list-item title="Visualização" subtitle="Modo de exibição">
        <v-btn-toggle
          v-model="exibitionMode"
          mandatory
          color="secondary"
          density="compact"
          variant="outlined"
        >
          <v-btn value="table">
            <v-icon icon="mdi-table" />
            Tabela
          </v-btn>
          <v-btn value="binder">
            <v-icon icon="mdi-cards" />
            Cartas
          </v-btn>
        </v-btn-toggle>
      </v-list-item>

      <v-list-item>
        <v-select
          label="Cartas por página"
          v-model="pageSize"
          :items="[12, 24, 48, 96]"
          compact
        />
      </v-list-item>
      <v-list-item subtitle="Ordem">
        <v-btn-toggle
          v-model="sortBy"
          mandatory
          color="secondary"
          density="compact"
          variant="outlined"
        >
          <v-btn value="number">
            <v-icon icon="mdi-numeric" />
          </v-btn>
          <v-btn value="name">
            <v-icon icon="mdi-alphabetical" />
          </v-btn>
          <v-btn value="rarity">
            <v-icon icon="mdi-cards-diamond" />
          </v-btn>
        </v-btn-toggle>
      </v-list-item>

      <template v-slot:append>
        <v-list-item>
          <template v-slot:append>
            <v-badge :content="wants.length" inline color="pink" />
          </template>
          Quero
        </v-list-item>
        <v-list-item>
          <template v-slot:append>
            <v-badge :content="haves.length" inline color="deep-purple" />
          </template>
          Troco
        </v-list-item>
        <v-list-item>
          <SaveButton block color="primary" />
        </v-list-item>
      </template>
    </v-navigation-drawer>

    <v-fab icon="mdi-dots-vertical" app color="primary" size="large" @click="isDrawerOpen = !isDrawerOpen"></v-fab>
  </v-container>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script lang="ts" setup>
import RarirtyDisplay from "@/components/atoms/RarirtyDisplay.vue";
import { ExpansionSet, Rarity } from "@/model/Card";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify";

const tab = ref(ExpansionSet.GeneticApex);

const sortBy = ref<"number" | "name" | "rarity">("number");

const exibitionMode = ref<"table"|"binder">("table");

const pageSize = ref(12);

const {
  getUsername,
  getHavesList: haves,
  getWantsList: wants,
} = storeToRefs(useAppStore());

const binders = [
  ExpansionSet.GeneticApex,
  ExpansionSet.MythicalIsland,
  ExpansionSet.SpaceTimeSmackdown,
];

const rarityOptions = [
  Rarity.OneDiamond,
  Rarity.TwoDiamonds,
  Rarity.ThreeDiamonds,
  Rarity.FourDiamonds,
  Rarity.OneStar,
  Rarity.TwoStars,
  Rarity.ThreeStars,
  Rarity.Crown,
];

const rarityFilter = ref([Rarity.ThreeDiamonds, Rarity.FourDiamonds]);

const { mdAndUp } = useDisplay();
const isDrawerOpen = ref(mdAndUp.value);

const removeRarityFromFilter = (rarity: Rarity) => {
  rarityFilter.value = rarityFilter.value.filter((x) => x !== rarity);
};
</script>
