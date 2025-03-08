<template>
  <v-app-bar density="comfortable">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="isDrawerOpen = !isDrawerOpen" />
    </template>
  </v-app-bar>
  <v-navigation-drawer v-model="isDrawerOpen" :permanent="mdAndUp">
    <v-list-item tag="router-link" to="/" class="mt-3">
      <v-icon icon="mdi-home" />
      Inicio
    </v-list-item>
    <template v-if="user">
      <v-list-item v-for="page in pages" tag="router-link" :to="page.target">
        <v-icon class="mr-2" :icon="page.icon" />
        {{ page.label }}
      </v-list-item>
    </template>
    <template v-slot:append>
      <v-divider class="my-3"></v-divider>
      <UserMenu  />
      <v-spacer class="mb-3"/>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useCurrentUser } from "vuefire";
import { useDisplay } from "vuetify";

const pages = [
  {
    label: "Editar Sua Lista",
    target: "collection",
    icon: "mdi-bookmark-box-multiple",
  },
  { label: "Listas", target: "lists", icon: "mdi-swap-horizontal" },
];

const { mdAndUp } = useDisplay();
const isDrawerOpen = ref(mdAndUp.value);

const user = useCurrentUser();
</script>
