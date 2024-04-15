import Image from "next/image";
import EquipmentComponent from "./components/equipment.component";
import StratagemComponent from "./components/stratagem.component";
import generateRandomName from "@/utils/namegen";

export default async function Home() {
  const name = generateRandomName();
  return (
    <main className="bg-primary">
      <nav className="top-0 w-full h-20 flex justify-center ">
        <div className="bg-slate-600 nav-start w-12"></div>
        <div className="flex flex-col justify-center p-2 bg-slate-500 flex-1">
          <div className="flex justify-center">
            <Image
              priority
              width={128}
              height={100}
              src={"/helldivers.png"}
              alt="helldivers"
            />
          </div>
          <h1 className="text-nowrap text-center font-black">
            ULTIMATE BRAVERY
          </h1>
        </div>
        <div className="bg-slate-600 nav-end w-12"></div>
      </nav>
      <div className="pt-24 flex justify-center items-center p-4">
        <div className="flex-col card h-96 w-64 bg-slate-500 flex justify-center items-center">
          <h1 className="title mt-4 p-4 font-black text-center text-3xl">
            {name}
          </h1>
          <div className="mt-auto mb-12 bravery grid grid-cols-4">
            <div className="item armor">
              <EquipmentComponent type="armor" />
            </div>
            <div className="item mainhand">
              <EquipmentComponent type="mainhand" />
            </div>
            <div className="item sidearm">
              <EquipmentComponent type="sidearm" />
            </div>
            <div className="item grenade">
              <EquipmentComponent type="grenade" />
            </div>
            <StratagemComponent />
          </div>
        </div>
      </div>
    </main>
  );
}
