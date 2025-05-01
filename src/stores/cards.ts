import type { Card, CardQuery } from "@/model/Card";
import type { Dictionary } from "@/model/Dictionary";
import { defineStore } from "pinia";

const getQueryId = (query: CardQuery) => {
  return `e:${query.expansion?.join("-") ?? ""}_r:${
    query.rarity?.join("-") ?? ""
  }_o:${query.order ?? ""}_p:${query.page ?? ""}_ps:${query.pageSize ?? ""}`;
};

const MIN_AS_MS = 60 * 1000;
const HOUR_AS_MS = 60 * MIN_AS_MS;
const DAY_AS_MS = 24 * HOUR_AS_MS;
const QUERY_PERSISTENCE_EXPIRATION = 15 * DAY_AS_MS;
const CARD_PERSISTENCE_EXPIRATION = 15 * DAY_AS_MS;

export const useCardStore = defineStore(
  "cardStore",
  () => {
    const queries = ref<Dictionary<Array<Card>>>({});
    const queriesTimestamps = ref<Dictionary<string>>({});
    const cards = ref<Dictionary<Card>>({});
    const cardsTimestamps = ref<Dictionary<string>>({});
    const hiddenCards = ref<Dictionary<boolean>>({});

    const getQuery = (query: CardQuery) => {
      const id = getQueryId(query);
      const stored = queries.value[id];
      const timestamp = queriesTimestamps.value[id];
      if (
        !stored ||
        isTimestampExpired(timestamp, QUERY_PERSISTENCE_EXPIRATION)
      )
        return undefined;
      return stored;
    };

    const saveQuery = (query: CardQuery, data: Array<Card>) => {
      const id = getQueryId(query);
      queries.value[id] = data;
      queriesTimestamps.value[id] = new Date().toISOString();
    };

    const getCard = (number: string) => {
      const stored = cards.value[number];
      const timestamp = cardsTimestamps.value[number];
      if (!stored || isTimestampExpired(timestamp, CARD_PERSISTENCE_EXPIRATION))
        return undefined;
      return stored;
    };

    const getCards = (numbers: string[]) => {
      return numbers.map(n => getCard(n))
    }

    const saveCard = (card: Card) => {
      const id = card.number;
      cards.value[id] = card;
      cardsTimestamps.value[id] = new Date().toISOString();
    };

    const isTimestampExpired = (timestamp: string, maxDiff: number) => {
      if (!timestamp) return true;
      const date = new Date(timestamp);
      const now = new Date();
      const diff = now.getTime() - date.getTime();
      return diff > QUERY_PERSISTENCE_EXPIRATION;
    };

    const isHidden = (number: string) => {
      return !!hiddenCards.value[number];
    };

    const setHidden = (number: string, isHidden: boolean) => {
      hiddenCards.value[number] = isHidden;
    };

    return {
      queries,
      queriesTimestamps,
      cards,
      cardsTimestamps,
      hiddenCards,
      getCard,
      getCards,
      saveCard,
      getQuery,
      saveQuery,
      isHidden,
      setHidden,
    };
  },
  {
    persist: {
      key: "ejc_mem",
    },
  }
);
