import client from "@/utils/supabase/client";
import { Equipment, EquipmentType, Item } from "@/utils/types/items.types";

export async function getEquipment(
  type: EquipmentType
): Promise<Equipment | undefined> {
  const { data: items, error } = await client
    .from("items")
    .select("*")
    .eq("type", type)
    .returns<Item[]>();
  if (error) {
    console.error(error);
    return;
  }
  return items[Math.floor(Math.random() * items.length)];
}
