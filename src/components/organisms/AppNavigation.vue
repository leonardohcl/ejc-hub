<template>
  <v-app-bar density="comfortable">
    <v-container>
      <v-row no-gutters>
        <v-col v-if="user">
          <v-btn-group>
            <v-btn
              v-for="page in pages"
              tag="router-link"
              :to="page.target"
              active-color="primary"
            >
              {{ page.label }}
            </v-btn>
          </v-btn-group>
        </v-col>
        <v-col cols="auto" class="ml-auto">
          <UserMenu />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useCurrentUser } from "vuefire";

const pages = [
  { label: "Sua Coleção", target: "collection" },
  { label: "Trocas", target: "matches" },
];

const user = useCurrentUser();
</script>
