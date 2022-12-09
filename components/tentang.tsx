import React from "react";
import Image from "next/image";
import KontenTentang from "./konten_tentang";
export default function Tentang() {
  return (
    <div className="" id="tentang">
      <KontenTentang/>
      <Image
        className=" w-screen h-screen"
        src={require("./images/background_tentang.webp")}
        alt="background tentang"
        style={{ zIndex: 0 }}
      />
    </div>
  );
}
