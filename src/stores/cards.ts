import type { Card, CardQuery } from "@/model/Card";
import type { Dictionary } from "@/model/Dictionary";
import { defineStore } from "pinia";

const getQueryId = (query: CardQuery) => {
  return `e:${query.expansion?.join("-") ?? ""}_r:${
    query.rarity?.join("-") ?? ""
  }_o:${query.order ?? ""}_p:${query.page ?? ""}_ps:${query.pageSize ?? ""}`;
};

const MIN_AS_MS = 60 * 1000
const HOUR_AS_MS = 60 * MIN_AS_MS
const DAY_AS_MS = 24 * HOUR_AS_MS
const PERSISTENCE_EXPIRATION = DAY_AS_MS;

export const useCardStore = defineStore(
  "cardStore",
  () => {
    const queries = ref<Dictionary<Array<Card>>>({});
    const timestamps = ref<Dictionary<string>>({});

    const getQuery = (query: CardQuery) => {
      const id = getQueryId(query);
      const stored = queries.value[id];
      if (!stored || isQueryExired(id)) return undefined;
      return stored;
    };

    const saveQuery = (query: CardQuery, data: Array<Card>) => {
      const id = getQueryId(query);
      queries.value[id] = data;
      timestamps.value[id] = new Date().toISOString();
    };

    const isQueryExired = (queryId: string) => {
      const timestamp = timestamps.value[queryId];
      if (!timestamp) return true;
      const date = new Date(timestamp);
      const now = new Date()
      const diff = now.getTime() - date.getTime();
      return diff > PERSISTENCE_EXPIRATION
    };

    return { queries, timestamps, getQuery, saveQuery };
  },
  {
    persist: {
      key: "ejc_mem",
    },
  }
);
