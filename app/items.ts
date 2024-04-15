import { createClient } from "@/utils/supabase/server";

export type ItemType =
  | "armor"
  | "mainhand"
  | "sidearm"
  | "grenade"
  | "stratagem";

export type Item = {
    name: string;
    class: string,
    imageUrl: string;
    type: ItemType;
}

export async function GetRandomItem(type: ItemType): Promise<Item | undefined> {
  const supabase = createClient();
  const { data: items, error } = await supabase.from("items").select("*").eq("type", type);
  if (error) {
    console.error(error);
    return;
  }
    return items[Math.floor(Math.random() * items.length)];
}
