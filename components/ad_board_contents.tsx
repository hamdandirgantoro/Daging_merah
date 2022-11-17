import React from "react";
import Image from "next/image";
export default function AdBoardContents() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center absolute"
      style={{ zIndex: 1 }}
    >
      <div className="">
        <h1 className="text-slate-500 font-bold">
          Daging Sapi Segar untuk Keluarga Indonesia
        </h1>
      </div>
    </div>
  );
}
