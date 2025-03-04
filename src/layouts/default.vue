<template>
  <v-main>
    <AppNavigation />
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
import { getWantsAndHaves, loadPlayerData } from "@/plugins/firebase";
import { useAppStore } from "@/stores/app";
import { useFirebaseAuth } from "vuefire";

const auth = useFirebaseAuth();
const store = useAppStore();

onMounted(async () => {
  auth?.onAuthStateChanged(async (user) => {
    if (!user) return;
    const data = await getWantsAndHaves(user.uid);
    if (data) {
      store.loadList(data);
    }

    const player = await loadPlayerData(user.uid);
    if (!player) return;
    store.loadPlayer(player);
  });
});
</script>
