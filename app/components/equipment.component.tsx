import { EquipmentType } from "@/utils/types/items.types";
import Image from "next/image";
import { getEquipment } from "../../utils/api/get-equipment";

export default async function Item({ type }: { type: EquipmentType }) {
  const item = await getEquipment(type);
  if (!item) {
    return null;
  }
  return <Image height={100} width={100} src={item?.imageUrl} alt="" />;
}
