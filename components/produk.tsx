import React from "react";
import Image from "next/image";
import KontenTentang from "./konten_tentang";
import KontenProduk from "./konten_produk";
export default function Produk() {
  return (
    <div className="static" id="produk">
      <KontenProduk />
      <Image
        className=" brightness-50 w-full h-full"
        src={require("./images/background_produk.webp")}
        alt="background tentang"
        style={{ zIndex: 0 }}
      />
    </div>
  );
}
