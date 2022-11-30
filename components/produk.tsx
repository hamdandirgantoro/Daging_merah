import React from "react";
import Image from "next/image";
export default function Produk() {
  return (
    <div className="static" id="produk">
      <Image
        className=" w-screen h-screen"
        src={require("./images/background_produk.webp")}
        alt="background tentang"
        style={{ zIndex: 0 }}
      />
    </div>
  );
}
