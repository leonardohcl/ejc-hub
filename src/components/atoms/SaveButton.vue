<template>
  <v-btn prepend-icon="mdi-floppy" :loading="isLoading" @click="handleSave">
    Salvar
    <v-snackbar
      v-model="snack"
      :color="snackColor"
      close-delay="5000"
      location="top center"
    >
      {{ message }}
    </v-snackbar>
  </v-btn>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
import { registerWantsAndHaves } from "@/plugins/firebase";
import type PlayerList from "@/model/PlayerList";
import { getCurrentUser } from "vuefire";

const store = useAppStore();
const { getListCopy, getUsername, getFriendId } = storeToRefs(store);
const isLoading = ref(false);
const snack = ref(false);
const snackColor = ref("");
const message = ref("");

const handleSave = async () => {
  try {
    isLoading.value = true;
    const user = await getCurrentUser();
    if (!user) {
      isLoading.value = false;
      return;
    }

    const data: PlayerList = {
      ...getListCopy.value(),
      player: user.uid,
      username: getUsername.value,
      friendId: getFriendId.value,
    };

    if (!data.username) {
      isLoading.value = false;
      message.value = "Por favor atualize seu nome de jogardor";
      snackColor.value = "red";
      return;
    }

    await registerWantsAndHaves(data);
    message.value = "Coleção salva com sucesso";
    isLoading.value = false;
    snackColor.value = "success";
  } catch {
    message.value = "Erro ao salvar coleção";
    snackColor.value = "error";
  } finally {
    snack.value = true;
  }
};
</script>
