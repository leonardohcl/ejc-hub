<template>
  <v-card>
    <v-card-title> 
      <span class="text-h5 font-weight-bold mr-2">
        {{ username }} 
      </span> 
      <small class="text-caption text-grey">{{ friendId }}</small>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <v-list border>
            <v-list-subheader title="Oferece"/>
            <v-list-item v-for="card in willReceive">
              <v-list-item-title>
                <CardSpace v-bind="card" show-expansion-set></CardSpace>
              </v-list-item-title>
            </v-list-item>
            <v-list-item v-if="!willReceive.length">
              <v-list-item-title>
                Este jogador não tem nenhuma carta da sua lista
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="auto" class="d-flex align-center">
          <v-icon icon="mdi-swap-horizontal-bold"></v-icon>
        </v-col>
        <v-col>
          <v-list border>
            <v-list-subheader title="Você pode oferecer"/>
            <v-list-item v-for="card in willSend">
              <v-list-item-title>
                <CardSpace v-bind="card" show-expansion-set></CardSpace>
              </v-list-item-title>
            </v-list-item>
            <v-list-item v-if="!willSend.length">
              <v-list-item-title class="text-grey">
                Você não tem nenhuma carta da lista deste jogador
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { fromNumber } from "@/assets/data/cards";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const props = defineProps({
  username: { type: String, required: true },
  friendId: { type: String, required: true },
  haves: { type: Array<string>, required: true },
  wants: { type: Array<string>, required: true },
});

const store = useAppStore();
const { getCardHave, getCardWants } = storeToRefs(store);

const willSend = computed(() => {
  return props.haves
    .filter((x) => getCardHave.value(x))
    .map((x) => fromNumber(x));
});

const willReceive = computed(() => {
  return props.haves
    .filter((x) => getCardWants.value(x))
    .map((x) => fromNumber(x));
});
</script>
