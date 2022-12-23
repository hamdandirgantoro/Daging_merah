import React from "react";
import Image from "next/image";
import KontenTentang from "./konten_tentang";
export default function Tentang() {
  return (
    <div className="" id="tentang">
      <div className="z-10 absolute h-full w-full">
        <div className="flex justify-center ">
          <div className="w-fit h-fit p-3 mt-5 font-bold text-white text-4xl">
            Visi Dan Misi Kami
          </div>
        </div>
      </div>
      <Image
        className="brightness-50 w-screen h-screen"
        src={require("./images/background_tentang.webp")}
        alt="background tentang"
        style={{ zIndex: 0 }}
      />
    </div>
  );
}
