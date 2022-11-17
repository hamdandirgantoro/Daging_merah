import Image from "next/image";
import React from "react";
import AdBoardContents from "./ad_board_contents";

export default function AdBoard() {
  return (
    <div className="">
      <AdBoardContents />
      <Image
        alt="daging sapi "
        src={require("./images/Steak.webp")}
        fill
        style={{ zIndex: 0 }}
      />
    </div>
  );
}
