<template>
  <span>{{ output }}</span>
</template>

<script setup lang="ts">
import { ExpansionSet } from "@/model/Card";

const props = defineProps({
  expansion: {
    type: Number as PropType<ExpansionSet>,
    required: true,
  },
});

const output = computed(() => {
  return {
    [ExpansionSet.GeneticApex]: "Genetic Apex",
    [ExpansionSet.MythicalIsland]: "Mythical Island",
    [ExpansionSet.SpaceTimeSmackdown]: "Space Time Smackdown",
    [ExpansionSet.TriumphantLight]: "Triumphant Light",
    [ExpansionSet.ShinyRevelry]: "Shiny Revelry",
    [ExpansionSet.CelestialGuardians]: "Celestial Guardians",
    [ExpansionSet.PromoA]: "Promo-A",
  }[props.expansion];
});
</script>
