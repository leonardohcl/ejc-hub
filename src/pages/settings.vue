<template>
  <v-container>
    <h1 class="mb-2">Sua Conta</h1>
    <v-form @submit.prevent="handleSubmit" :disabled="isLoading">
      <v-card>
        <v-card-text>
          <v-row>
            <v-col col="12" md="6" lg="4" xl="3">
              <v-text-field label="Nome no jogo" v-model="username" required />
            </v-col>
            <v-col col="12" md="6" lg="4" xl="3">
              <v-text-field label="Id de amigo" v-model="friendId" />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn type="submit" :loading="isLoading">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script setup lang="ts">
import { loadPlayerData, savePlayerData } from "@/plugins/firebase";
import { getCurrentUser } from "vuefire";

const isLoading = ref(false);
const username = ref("");
const friendId = ref("");

onMounted(async () => {
  const user = await getCurrentUser();
  if (!user) return;
  const data = await loadPlayerData(user.uid);
  if (!data) return;
  username.value = data.username;
  friendId.value = data.friendId || "";
});

const handleSubmit = async () => {
  const user = await getCurrentUser();
  if (!user) return;
  isLoading.value = true;
  await savePlayerData({
    id: user.uid,
    username: username.value,
    friendId: friendId.value,
  });
  isLoading.value = false;
};
</script>
