import Image from "next/image";
import React from "react";
import AdBoardContents from "./ad_board_contents";

export default function AdBoard() {
  return (
    <div className="shadow-[#000000] drop-shadow-2xl" id="home">
      <AdBoardContents />
      <Image
        className="hidden md:block brightness-50 h-full w-full "
        alt="daging sapi "
        src={require("./images/Steak.webp")}
        style={{ zIndex: 0 }}
      />
      <Image
        className=" md:hidden brightness-50 h-full w-full "
        alt="daging sapi "
        src={require("./images/steak_mobile.webp")}
        style={{ zIndex: 0 }}
      />
    </div>
  );
}
