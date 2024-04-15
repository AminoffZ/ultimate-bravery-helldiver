import { GetStratagems } from "@/utils/api/get-stratagems";
import Image from "next/image";

export default async function StratagemComponent() {
  const stratagems = await GetStratagems();
  console.log(stratagems);
  if (!stratagems || stratagems.length === 0) {
    return null;
  }
  return (
    <>
      {stratagems.map((stratagem, index) => (
        <div key={index} className={`item item-${index}`}>
          <Image height={100} width={100} src={stratagem?.imageUrl} alt="" />
        </div>
      ))}
    </>
  );
}
