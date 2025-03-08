import { initializeApp } from "firebase/app";
import {
  and,
  collection,
  doc,
  DocumentReference,
  getDocFromCache,
  getFirestore,
  initializeFirestore,
  limit,
  orderBy,
  persistentLocalCache,
  query,
  QueryConstraint,
  QueryDocumentSnapshot,
  setDoc,
  startAfter,
  where,
  type QueryFilterConstraint,
  type SnapshotOptions,
  type WithFieldValue,
} from "firebase/firestore";
import { VueFire, VueFireAuth, VueFireFirestoreOptionsAPI } from "vuefire";
import { useCollection, useDocument } from "vuefire";

import type { App } from "vue";
import type PlayerList from "@/model/PlayerList";
import type Player from "@/model/Player";
import type { Card, CardQuery } from "@/model/Card";

// ... other firebase imports
export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
});

initializeFirestore(firebaseApp, { localCache: persistentLocalCache() });

// used for the firestore refs
const db = getFirestore(firebaseApp);

export function registerFirebase(app: App) {
  app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
      VueFireFirestoreOptionsAPI({
        once: true,
      }),
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
  const listRef = useDocument(
    getPlayerListReference(userId).withConverter(listConverter),
    { once: true }
  );
  const snap = await listRef.promise.value;
  if (!snap) {
    return null;
  }
  return snap as PlayerList;
}

export async function getPlayerLists() {
  const q = useCollection(
    query(collection(db, TCGP_LISTS_COLLECTION_ID)).withConverter(
      listConverter
    ),
    { once: true }
  );

  const snap = await q.promise.value;
  return snap as Array<PlayerList>;
}

function getCardQuery({
  number,
  pageSize,
  order,
  expansion,
  rarity,
}: CardQuery) {
  const params: Array<QueryConstraint> = [];

  const wheres: Array<QueryFilterConstraint> = [];

  if (number) {
    wheres.push(where("number", "==", number));
  }

  if (expansion !== undefined) {
    wheres.push(where("expansion", "in", expansion));
  }

  if (rarity !== undefined) {
    wheres.push(where("rarity", "in", rarity));
  }

  if (order !== undefined) {
    params.push(orderBy(order));
  }

  if (pageSize) {
    params.push(limit(pageSize));
  }

  const condition = wheres.length > 1 ? and(...wheres) : wheres.pop();
  const filter = condition ? [condition as QueryConstraint, ...params] : params;
  return useCollection(
    query(collection(db, TCGP_CARDS_COLLECTION_ID), ...filter),
    { once: true }
  );
}

export async function getCards(params: CardQuery) {
  try {
    const q = getCardQuery(params);
    const snap = (await q.promise.value) as Card[];
    return snap;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function loadPlayerData(userId: string) {
  const doc = useDocument(getPlayerReference(userId), { once: true });
  const snap = await doc.promise.value;
  if (!snap) {
    return null;
  }
  return snap as Player;
}

export async function savePlayerData(data: Player) {
  await setDoc(getPlayerReference(data.id), data);
}

export async function saveCardData(card: Card) {
  await setDoc(getCardReference(card.number), card);
}
