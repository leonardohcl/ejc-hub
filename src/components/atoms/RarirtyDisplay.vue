<template>
  <span>{{ output }}</span>
</template>

<script setup lang="ts">
import { Rarity } from "@/model/Card";

const props = defineProps({
  rarity: {
    type: Number as PropType<Rarity>,
    required: true,
  },
});

const output = computed(() => {
  return {
    [Rarity.Promo]: "🅿️",
    [Rarity.OneDiamond]: "🔷",
    [Rarity.TwoDiamonds]: "🔷🔷",
    [Rarity.ThreeDiamonds]: "🔷🔷🔷",
    [Rarity.FourDiamonds]: "🔷🔷🔷🔷",
    [Rarity.OneStar]: "⭐",
    [Rarity.TwoStars]: "⭐⭐",
    [Rarity.ThreeStars]: "⭐⭐⭐",
    [Rarity.Crown]: "👑",
    [Rarity.Shiny]: "✨",
    [Rarity.DoubleShiny]: "✨✨",
  }[props.rarity];
});
</script>
