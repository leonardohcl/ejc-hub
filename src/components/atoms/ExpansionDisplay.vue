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
    [ExpansionSet.SpaceTimeSmackdown]: "Space Time Smackdown",
    [ExpansionSet.MythicalIsland]: "Mythical Island",
    [ExpansionSet.PromoA]: "Promo-A",
  }[props.expansion];
});
</script>
