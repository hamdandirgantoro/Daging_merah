import React from "react";
import Image from "next/image";
import KontenTentang from "./konten_tentang";
export default function Tentang() {
  return (
    <div className="" id="tentang">
      <div className="z-10 absolute h-full w-full">
        <div className="flex flex-col items-center ">
          <h1 className="w-fit h-fit p-3 mt-5 font-bold text-white text-4xl">
            Visi Dan Misi Kami
          </h1>
          <p className="font-bold p-3 mt-5 text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut iure illo, totam in animi, dolorem corrupti optio quia recusandae accusamus! Esse tenetur non, vero dolor ipsum molestias laudantium laborum.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi at nihil ut, deserunt inventore eius? Similique illum quibusdam consectetur temporibus aspernatur consequatur laudantium, exercitationem minima voluptatem. Ab odit sunt molestias?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi debitis earum optio at ducimus eaque, doloremque, cupiditate, ipsa itaque aut minus totam obcaecati! Nostrum, esse! Esse incidunt enim aperiam!
          </p>
        </div>
      </div>
      <Image
        className="brightness-50 w-screen h-screen"
        src={require("./images/background_tentang.webp")}
        alt="background tentang"
        style={{ zIndex: 0 }}
      />
    </div>
  );
}
