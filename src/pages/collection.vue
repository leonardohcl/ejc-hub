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
        Parece que você ainda não registrou seu nome no jogo. Sem
        essas informações não será possível salvar sua coleção
      </v-banner-text>
      <v-banner-actions>
        <v-btn tag="router-link" to="settings"> Registrar </v-btn>
      </v-banner-actions>
    </v-banner>
    <v-row>
      <v-col cols="12" md="3" xl="2" class="d-flex flex-column ga-2">
        <v-expansion-panels multiple>
          <v-expansion-panel title="Filtrar" static>
            <v-expansion-panel-text>
              <span class="text-caption">Raridade</span>
              <v-chip-group
                v-model="rarityFilter"
                class="h-auto flex-wrap"
                color="primary"
                multiple
                column
              >
                <v-chip v-for="opt in rarityOptions" :key="opt" :value="opt">
                  <RarirtyDisplay :rarity="opt" />
                </v-chip>
              </v-chip-group>

              <span class="text-caption">Mostrar</span>
              <v-row class="w-100" no-gutters>
                <v-col cols="12">
                  <v-switch
                    label="Troco"
                    v-model="displayOptions.showHaves"
                    color="primary"
                    hide-details
                  />
                </v-col>
                <v-col cols="12">
                  <v-switch
                    label="Quero"
                    v-model="displayOptions.showWants"
                    color="primary"
                    hide-details
                  />
                </v-col>
                <v-col cols="12">
                  <v-switch
                    label="Não respondidas"
                    v-model="displayOptions.showUnanswered"
                    color="primary"
                    hide-details
                  />
                </v-col>
              </v-row>
              <span class="text-caption">Ordem</span>
              <v-row>
                <v-col>
                  <v-btn-toggle v-model="sortBy" mandatory color="primary">
                    <v-btn value="number">
                      <v-icon icon="mdi-numeric" />
                    </v-btn>
                    <v-btn value="alphabetical">
                      <v-icon icon="mdi-alphabetical" />
                    </v-btn>
                    <v-btn value="rarity">
                      <v-icon icon="mdi-cards-diamond" />
                    </v-btn>
                  </v-btn-toggle>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-card>
          <v-card-title class="text-body-2"> Aplicados </v-card-title>
          <v-card-text class="d-flex ga-2 flex-wrap">
            <v-chip
              v-if="displayOptions.showHaves"
              color="primary"
              size="small"
              variant="outlined"
              @click="displayOptions.showHaves = false"
            >
              Troco
            </v-chip>
            <v-chip
              v-if="displayOptions.showWants"
              color="warning"
              size="small"
              variant="outlined"
              @click="displayOptions.showWants = false"
            >
              Quero
            </v-chip>
            <v-chip
              v-if="displayOptions.showUnanswered"
              size="small"
              variant="outlined"
              color="grey"
              @click="displayOptions.showUnanswered = false"
            >
              Não Respondido
            </v-chip>
            <v-chip
              v-for="rarity in rarityFilter"
              size="small"
              variant="tonal"
              @click="removeRarityFromFilter(rarity)"
            >
              <RarirtyDisplay :rarity="rarity" />
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="9" xl="10">
        <v-tabs v-model="tab">
          <v-tab
            v-for="(cards, expansionSet) in binders"
            :key="expansionSet"
            :value="expansionSet"
          >
            <ExpansionDisplay :expansion="+expansionSet" />
          </v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            v-for="(cards, expansionSet) in binders"
            :key="expansionSet"
            :value="expansionSet"
          >
            <Binder
              :card-list="cards"
              :hide-haves="!displayOptions.showHaves"
              :hide-wants="!displayOptions.showWants"
              :hide-unsawered="!displayOptions.showUnanswered"
              :rarity-filter="rarityFilter"
              :sort-by="sortBy"
            />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-col>
    </v-row>
    <SaveButton />
  </v-container>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script lang="ts" setup>
import cards from "@/assets/data/cards";
import RarirtyDisplay from "@/components/atoms/RarirtyDisplay.vue";
import { ExpansionSet, Rarity, type Card } from "@/model/Card";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const tab = ref(ExpansionSet.GeneticApex.toString());

const sortBy = ref<"number" | "alphabetical" | "rarity">("number");

const { getUsername, getFriendId } = storeToRefs(useAppStore());

const binders = [...cards].reduce((dict, card) => {
  if (card.expansion === ExpansionSet.PromoA) return dict;
  if (dict[card.expansion] != undefined) dict[card.expansion].push(card);
  else dict[card.expansion] = [card];
  return dict;
}, {} as { [key: number]: Array<Card> });

const displayOptions = reactive({
  showHaves: true,
  showWants: true,
  showUnanswered: true,
});

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

const removeRarityFromFilter = (rarity:Rarity) => {
  rarityFilter.value = rarityFilter.value.filter(x => x !== rarity)
}
</script>
