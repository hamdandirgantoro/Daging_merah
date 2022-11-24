import React from "react";
import Image from "next/image";
export default function Tentang() {
  return (
    <div className="static">
      <Image
        className=" w-screen h-screen"
        src={require("./images/background_tentang.jpg")}
        alt="background tentang"
        style={{ zIndex: 0 }}
      />
    </div>
  );
}
