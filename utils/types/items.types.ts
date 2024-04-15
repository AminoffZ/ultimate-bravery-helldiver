export type ItemType =
  | "armor"
  | "mainhand"
  | "sidearm"
  | "grenade"
  | "stratagem";

export type Item<T = ItemClass> = {
  name: string;
  class: T;
  imageUrl: string;
  type: ItemType;
};

export type ItemClass =
  | StratagemClass
  | ArmorClass
  | MainhandClass
  | GrenadeClass;

export type StratagemClass =
  | "weapon"
  | "sentry"
  | "orbital"
  | "eagle"
  | "vehicle"
  | "backpack";
export type ArmorClass = "heavy" | "medium" | "light";
export type MainhandClass =
  | "smg"
  | "energy"
  | "shotgun"
  | "sniper"
  | "explosive"
  | "assault_rifle";
export type SidearmClass = "pistol" | "energy" | "smg";
export type GrenadeClass = "explosive" | "incendiary" | "smoke" | "ems";

export type Granade = Item<GrenadeClass>;
export type Armor = Item<ArmorClass>;
export type Mainhand = Item<MainhandClass>;
export type Stratagem = Item<StratagemClass>;

export type ItemStatus = {
  user_id: string;
  item_id: string;
  unlocked: boolean;
};

export type EquipmentType = Exclude<ItemType, "stratagem">;
export type Equipment = Exclude<Item, Stratagem>;
