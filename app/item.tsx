import Image from "next/image";
import { GetRandomItem, type ItemType } from "./items";

export default async function Item({ type }: { type: ItemType }) {
  console.log(GetRandomItem(type));
  const item = await GetRandomItem(type);
  if (!item) {
    return null;
  }
  return <Image height={100} width={100} src={item?.imageUrl} alt="" />;
}
