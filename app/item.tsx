import Image from "next/image";
import { GetRandomItem, type ItemCategory } from "./items";

export default function Item({ type }: { type: ItemCategory }) {
  console.log(GetRandomItem(type));
  return (
    <Image height={100} width={100} src={GetRandomItem(type).image} alt="" />
  );
}
