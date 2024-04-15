import {
  ArmorClass,
  GrenadeClass,
  MainhandClass,
  SidearmClass,
  StratagemClass,
} from "./items.types";

export type StratagemQuery = {
  count: number;
  classes: StratagemClass[];
};

export type MainhandQuery = {
  classes: MainhandClass[];
};

export type SidearmQuery = {
  classes: SidearmClass[];
};

export type ArmorQuery = {
  classes: ArmorClass[];
};

export type GrenadeQuery = {
  classes: GrenadeClass[];
};
