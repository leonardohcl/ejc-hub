// Utilities
import type { Dictionary } from "@/model/Dictionary";
import type Player from "@/model/Player";
import type PlayerList from "@/model/PlayerList";
import { remove } from "firebase/database";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    username: "",
    friendId: "",
    wants: {} as Dictionary<boolean>,
    haves: {} as Dictionary<boolean>,
  }),
  getters: {
    getWantsList: (state) => {
      return Object.getOwnPropertyNames(state.wants);
    },
    getHavesList: (state) => {
      return Object.getOwnPropertyNames(state.haves);
    },
    getListCopy: (state) => {
      return () => ({
        haves: Object.getOwnPropertyNames(state.haves),
        wants: Object.getOwnPropertyNames(state.wants),
      });
    },
    getCardWants: (state) => {
      return (cardNumber: string) => !!state.wants[cardNumber];
    },
    getCardHave: (state) => {
      return (cardNumber: string) => !!state.haves[cardNumber];
    },
    getUsername: (state) => state.username,
    getFriendId: (state) => state.friendId,
  },
  actions: {
    toggleWant(cardNumber: string) {
      const wants = !!this.wants[cardNumber];
      const have = !!this.haves[cardNumber];
      this.setWants(cardNumber, !wants);
      if (!wants && have) {
        this.setHave(cardNumber, false);
      }
    },
    toggleHave(cardNumber: string) {
      const have = !!this.haves[cardNumber];
      const wants = !!this.wants[cardNumber];
      if (!have && wants) {
        this.setWants(cardNumber, false);
      }
      this.setHave(cardNumber, !have);
    },
    setWants(cardNumber: string, value: boolean) {
      if (value) {
        this.wants[cardNumber] = true;
      } else {
        delete this.wants[cardNumber];
      }
    },
    setHave(cardNumber: string, value: boolean) {
      if (value) {
        this.haves[cardNumber] = true;
      } else {
        delete this.haves[cardNumber];
      }
    },
    loadList(list: PlayerList) {
      list.haves.forEach((x) => {
        this.setHave(x, true);
      });
      list.wants.forEach((x) => {
        this.setWants(x, true);
      });
    },
    loadPlayer(player: Player) {
      this.username = player.username;
      this.friendId = player.friendId || "";
    },
  },
});
