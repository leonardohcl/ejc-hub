import { initializeApp } from "firebase/app";
import {
  and,
  collection,
  doc,
  DocumentReference,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  QueryConstraint,
  QueryDocumentSnapshot,
  setDoc,
  startAfter,
  startAt,
  where,
  type QueryFilterConstraint,
  type SnapshotOptions,
  type WithFieldValue,
} from "firebase/firestore";
import { VueFire, VueFireAuth } from "vuefire";

import type { App } from "vue";
import type PlayerList from "@/model/PlayerList";
import type Player from "@/model/Player";
import type { Card, CardQuery, ExpansionSet, Rarity } from "@/model/Card";

// ... other firebase imports
export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
});

// used for the firestore refs
const db = getFirestore(firebaseApp);

export function registerFirebase(app: App) {
  app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  });
}

export const TCGP_CARDS_COLLECTION_ID = "pokemon-tcgp-cards";
export const TCGP_LISTS_COLLECTION_ID = "pokemon-tcgp-lists";
export const TCGP_PLAYERS_COLLECTION_ID = "pokemon-tcgp-players";

function getPlayerReference(userId: string) {
  return doc(db, TCGP_PLAYERS_COLLECTION_ID, userId);
}

function getCardReference(cardNumber: string) {
  return doc(db, TCGP_CARDS_COLLECTION_ID, cardNumber);
}

function getPlayerListReference(userId: string) {
  return doc(db, TCGP_LISTS_COLLECTION_ID, userId);
}

const listConverter = {
  toFirestore: (list: WithFieldValue<PlayerList>) => {
    return {
      list,
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    data.player = data.player.id;
    data.haves = data.haves.map((x: DocumentReference) => x.id);
    data.wants = data.wants.map((x: DocumentReference) => x.id);
    return data as PlayerList;
  },
};

export async function registerWantsAndHaves(data: PlayerList) {
  const haves = data.haves.map(getCardReference);
  const wants = data.wants.map(getCardReference);

  await setDoc(getPlayerListReference(data.player), {
    ...data,
    player: getPlayerReference(data.player),
    wants,
    haves,
  });
}

export async function getWantsAndHaves(userId: string) {
  const listRef = getPlayerListReference(userId).withConverter(listConverter);
  const snap = await getDoc(listRef);
  if (!snap.exists()) {
    return null;
  }
  return snap.data();
}

export async function getMatchingHaves(wants: Array<string>) {
  if (!wants.length) return [];
  const q = query(
    collection(db, TCGP_LISTS_COLLECTION_ID),
    where("haves", "array-contains-any", wants.map(getCardReference))
  ).withConverter(listConverter);

  const snap = await getDocs(q);
  const data: Array<PlayerList> = [];
  snap.forEach((doc) => {
    data.push(doc.data() as PlayerList);
  });
  return data;
}

function getCardQuery({
  lastCard,
  pageSize,
  order,
  expansion,
  rarity,
}: CardQuery) {
  const params: Array<QueryConstraint> = [];

  const wheres: Array<QueryFilterConstraint> = [];

  if (expansion !== undefined) {
    wheres.push(where("expansion", "in", expansion));
  }

  if (rarity !== undefined) {
    wheres.push(where("rarity", "in", rarity));
  }

  if (order !== undefined) {
    params.push(orderBy(order));
    if (lastCard) {
      params.push(startAfter(lastCard[order]));
    }
  }

  if (pageSize) {
    params.push(limit(pageSize));
  }

  const condition = wheres.length > 1 ? and(...wheres) : wheres.pop();
  const filter = condition ? [condition as QueryConstraint, ...params] : params;

  return query(collection(db, TCGP_CARDS_COLLECTION_ID), ...filter);
}

export async function getCardCount({ expansion, rarity }: CardQuery) {
  const q = getCardQuery({ expansion, rarity });
  const snap = await getDocs(q);
  return snap.size;
}

export async function getCards(params: CardQuery) {
  try {
    const q = getCardQuery(params);
    const snap = await getDocs(q);
    const data: Array<Card> = [];
    snap.forEach((doc) => {
      data.push(doc.data() as Card);
    });
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function loadPlayerData(userId: string) {
  const snap = await getDoc(getPlayerReference(userId));
  if (!snap.exists()) {
    return null;
  }
  return snap.data() as Player;
}

export async function savePlayerData(data: Player) {
  await setDoc(getPlayerReference(data.id), data);
}

export async function saveCardData(card: Card) {
  await setDoc(getCardReference(card.number), card);
}
