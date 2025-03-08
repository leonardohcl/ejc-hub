<template>
  <template v-if="user">
    <v-list-item
      :prepend-avatar="user.photoURL ?? ''"
      :title="getUsername || user.displayName || ''"
      :subtitle="getFriendId || user.email || ''"
      tag="router-link"
      to="settings"
    >
    </v-list-item>
    <v-list-item @click="handleSignOut">
      <v-icon icon="mdi-logout"/>
      Sair
    </v-list-item>
  </template>
  <v-list-item v-else>
    <v-btn
      prepend-icon="mdi-google"
      :disabled="isLoading"
      :loading="isLoading"
      @click="signinPopup"
    >
      Entrar com Google
    </v-btn>
  </v-list-item>
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
const router = useRouter();

const { getUsername, getFriendId } = storeToRefs(store);
const isLoading = ref(false);

const signinPopup = async () => {
  if (!auth) return;
  isLoading.value = true;
  await signInWithPopup(auth, googleAuthProvider).catch((reason) => {
    console.error("Failed sign", reason);
  });
  isLoading.value = false;
};

const handleSignOut = async () => {
  if (!auth) return;
  await signOut(auth);
  router.push("/");
};
</script>
