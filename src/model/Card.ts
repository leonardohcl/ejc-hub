export enum Rarity {
  Promo,
  OneDiamond,
  TwoDiamonds,
  ThreeDiamonds,
  FourDiamonds,
  OneStar,
  TwoStars,
  ThreeStars,
  Crown,
}

export enum ExpansionSet {
  PromoA,
  GeneticApex,
  MythicalIsland,
  SpaceTimeSmackdown,
}

export interface Card {
  number: string;
  name: string;
  rarity: Rarity;
  expansion: ExpansionSet;
}

export interface CardQuery {
  number?: string;
  expansion?: Array<ExpansionSet>;
  rarity?: Array<Rarity>;
  page?: number;
  pageSize?: number;
  order?: "name" | "number" | "rarity";
}
