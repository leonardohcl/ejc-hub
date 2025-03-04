<template>
  <v-container>
    <h1 class="mb-2">Trocas</h1>
    <v-card v-if="isLoading">
      <v-row>
        <v-col cols="12">
          <v-skeleton-loader type="sentences"></v-skeleton-loader>
        </v-col>
        <v-col>
          <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
          <v-skeleton-loader type="list-item-two-line"></v-skeleton-loader>
        </v-col>
        <v-col cols="auto" class="d-flex align-center">
          <v-icon icon="mdi-swap-horizontal-bold" />
        </v-col>
        <v-col>
          <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-card>
    <template v-else>
      <PlayerListMatch v-for="list in matches" v-bind="list" />
    </template>
    <v-pagination v-model="page" :length="pageCount" />
  </v-container>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script setup lang="ts">
import type PlayerList from "@/model/PlayerList";
import { getMatchingHaves } from "@/plugins/firebase";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const store = useAppStore();
const { getWantsList } = storeToRefs(store);
const matches = ref<Array<PlayerList>>([]);
const isLoading = ref(false);

const loadMatches = async () => {
  if (!getWantsList.value.length) return;
  isLoading.value = true;
  matches.value = await getMatchingHaves(getWantsList.value);
  isLoading.value = false;
};

const page = ref(1);
const pageSize = ref(5);
const pageCount = computed(() => {
  return Math.ceil(matches.value.length / pageSize.value);
});
const currentMatchPage = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return matches.value.slice(start, end);
});

watch(getWantsList, () => loadMatches());

onMounted(loadMatches);
</script>
