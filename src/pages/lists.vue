<template>
  <v-container>
    <h1 class="mb-2">Listas</h1>
    <v-switch
      label="Mostrar Apenas listas com cartas que eu quero"
      :disabled="isLoading"
      v-model="isMatchOnly"
      color="primary"
    ></v-switch>
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
    <div class="d-flex flex-column ga-3" v-else>
      <PlayerListDetails v-for="list in displayedLists" v-bind="list" />
      <v-empty-state
        v-if="!displayedLists.length"
        title="Nenhuma lista encontrada"
        text="Não encontramos nenhuma lista com os seus parâmetros"
      ></v-empty-state>
    </div>
    <v-pagination v-model="page" :length="pageCount" />
  </v-container>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script setup lang="ts">
import type PlayerList from "@/model/PlayerList";
import { getPlayerLists } from "@/plugins/firebase";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { getWantsList: userWants } = storeToRefs(appStore);
const lists = ref<Array<PlayerList>>([]);
const isLoading = ref(false);
const isMatchOnly = ref(true);

const displayedLists = computed(() => {
  if (!isMatchOnly.value) return lists.value;

  return lists.value.filter((list) => {
    return userWants.value.some((number) => list.haves.indexOf(number) >= 0);
  });
});

const loadLists = async () => {
  isLoading.value = true;
  lists.value = await getPlayerLists();
  isLoading.value = false;
};

const page = ref(1);
const pageSize = ref(5);
const pageCount = computed(() => {
  return Math.ceil(lists.value.length / pageSize.value);
});

onMounted(loadLists);
</script>
