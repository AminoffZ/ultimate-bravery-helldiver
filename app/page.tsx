import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary">
      <style></style>
      <nav className="top-0 w-full h-20 flex justify-center ">
        <div className="bg-slate-600 nav-start w-12"></div>
        <div className="flex flex-col justify-center p-2 bg-slate-500 flex-1">
          <div className="flex justify-center">
            <Image
              width={128}
              height={100}
              src={"/helldivers.png"}
              alt="helldivers"
            />
          </div>
          <h1
            style={{ color: "#FDE826" }}
            className="text-nowrap text-center font-black"
          >
            ULTIMATE BRAVERY
          </h1>
        </div>
        <div className="bg-slate-600 nav-end w-12"></div>
      </nav>
      <div className="container pt-24 flex justify-center items-center p-4">
        <div className="card h-96 w-64 bg-slate-500 flex justify-center items-center">
          <div className="mt-auto mb-12 bravery grid grid-cols-4">
            <div className="item armor"></div>
            <div className="item mainhand"></div>
            <div className="item sidearm"></div>
            <div className="item grenade"></div>
            <div className="item stat-1"></div>
            <div className="item stat-2"></div>
            <div className="item stat-3"></div>
            <div className="item stat-4"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
