<template>
  <v-btn v-if="user" class="p-0" size="large">
    <v-row class="flex-nowrap text-right" no-gutters>
      <v-col cols="auto" class="mr-2">
        <span class="text-body-1"> {{ getUsername || user.displayName }} </span><br>
        <span class="text-body-2">{{ getFriendId || user.email }}</span>
      </v-col>
      <v-col cols="auto">
        <v-avatar
          v-if="user.photoURL"
          color="surface-variant"
          :image="user.photoURL"
        />
        <v-avatar v-else color="surface-variant"> </v-avatar>
      </v-col>
    </v-row>
    <v-menu activator="parent">
      <v-list class="text-right">
        <v-list-item tag="router-link" to="settings" title="Perfil">
        </v-list-item>
        <v-list-item @click="handleSignOut" title="Sair"> </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
  <v-btn
    v-else
    prepend-icon="mdi-login"
    :disabled="isLoading"
    :loading="isLoading"
    @click="signinPopup"
  >
    Entrar com conta Google
  </v-btn>
</template>

<script lang="ts">
import { GoogleAuthProvider } from "firebase/auth";
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
export const googleAuthProvider = new GoogleAuthProvider();
</script>

<script setup lang="ts">
import { signInWithPopup, signOut } from "firebase/auth";
import { useCurrentUser, useFirebaseAuth } from "vuefire";

const auth = useFirebaseAuth();
const user = useCurrentUser();
const store = useAppStore();
const { getUsername, getFriendId } = storeToRefs(store);

const handleSignOut = async () => {
  if (auth) await signOut(auth);
};

const isLoading = ref(false);

const signinPopup = async () => {
  if (!auth) return;
  isLoading.value = true;
  await signInWithPopup(auth, googleAuthProvider).catch((reason) => {
    console.error("Failed sign", reason);
  });
  isLoading.value = false;
};
</script>
