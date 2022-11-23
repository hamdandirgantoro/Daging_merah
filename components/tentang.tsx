import React from "react";
import Image from "next/image";
export default function Tentang() {
  return (
    <Image
      src={require("./images/Steak.webp")}
      alt="background tentang"
      style={{ zIndex: 0 }}
    />
  );
}
