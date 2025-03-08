<template>
  <v-card>
    <v-card-title>
      <span class="text-h5 font-weight-bold mr-2">
        {{ username }}
      </span>
      <small class="text-caption text-grey" v-if="friendId">
        {{ friendId }}
      </small>
    </v-card-title>
    <v-card-text>
      <v-tabs v-model="tab">
        <v-tab
          ><v-chip class="mr-2">{{ haves.length }}</v-chip> Troca</v-tab
        >
        <v-tab
          ><v-chip class="mr-2">{{ wants.length }}</v-chip
          >Quer</v-tab
        >
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item v-for="list in [haves, wants]">
          <v-row>
            <v-col v-for="x in list" cols="12" sm="3" md="2">
              <CardSpace :number="x" show-expansion-set />
            </v-col>
            <v-col v-if="list.length === 0" >
              <v-empty-state text="Ops, não tem nenhuma carta aqui"></v-empty-state>
            </v-col>
          </v-row>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ExpansionSet, type Card } from "@/model/Card";
import type { Dictionary } from "@/model/Dictionary";
import type { PropType } from "vue";

const props = defineProps({
  username: { type: String, required: true },
  friendId: { type: String },
  haves: { type: Array as PropType<Array<string>>, required: true },
  wants: { type: Array as PropType<Array<string>>, required: true },
});

const cardsOwned = ref<Dictionary<Array<Card>>>({});
const cardsWanted = ref<Dictionary<Array<Card>>>({});
const tab = ref(0);

const expansions = [
  ExpansionSet.GeneticApex,
  ExpansionSet.MythicalIsland,
  ExpansionSet.SpaceTimeSmackdown,
];
</script>
