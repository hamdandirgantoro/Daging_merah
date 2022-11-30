import React from "react";
import Image from "next/image";
export default function AdBoardContents() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center absolute"
      style={{ zIndex: 1 }}
    >
      <div className="">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          Daging Sapi Segar untuk Keluarga <br />
          dan juga bisnis anda
        </h1>
      </div>
    </div>
  );
}
