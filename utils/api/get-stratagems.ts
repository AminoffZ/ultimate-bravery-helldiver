import client from "../supabase/client";
import { Stratagem } from "../types/items.types";
import { StratagemQuery } from "../types/query.types";

export async function getStratagems(
  config: StratagemQuery = {
    count: 4,
    classes: ["weapon", "sentry", "orbital", "eagle", "vehicle", "backpack"],
  }
) {
  const { data: items, error } = await client
    .from("items")
    .select("*")
    .eq("type", "stratagem")
    .in("class", config.classes)
    .returns<Stratagem[]>();
  if (error) {
    console.error(error);
    return;
  }
  return items.sort(() => Math.random() - 0.5).slice(0, config.count);
}
