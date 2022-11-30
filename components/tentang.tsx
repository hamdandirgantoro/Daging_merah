import React from "react";
import Image from "next/image";
export default function Tentang() {
  return (
    <div className="static" id="tentang">
      <Image
        className=" w-screen h-screen"
        src={require("./images/background_tentang.webp")}
        alt="background tentang"
        style={{ zIndex: 0 }}
      />
    </div>
  );
}
