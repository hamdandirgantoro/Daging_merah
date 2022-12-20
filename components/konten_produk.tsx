import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function KontenProduk() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center absolute"
      style={{
        zIndex: 1,
      }}
    >
      <div className=" rounded bg-red-600 p-5 border-solid h-fit w-fit flex justify-center shadow-[#000000] shadow-2xl">
        <div className="grid grid-cols-1">
          <div className="flex justify-center bg-red-700 mb-2 rounded">
            <h6 className="flex justify-center p-1 font-extrabold text-white">
              Produk Kami
            </h6>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className=" h-fit w-fit grid grid-cols-1 rounded border-solid border-2 border-red-100 bg-white shadow-[#000000] drop-shadow-2xl">
              <Image
                height={300}
                width={300}
                alt="12"
                className="rounded"
                src={require("./images/produk/daging_burger.webp")}
              />

              <div className="flex justify-center">
                <h1 className=" font-bold">Daging Burger Grass Fed</h1>
              </div>
            </div>
            <div className="border-solid border-2 border-red-100 bg-white rounded grid grid-cols-1 shadow-[#000000] drop-shadow-2xl">
              <Image
                height={300}
                width={300}
                alt="12"
                className="rounded"
                src={require("./images/produk/daging_giling.webp.webp")}
              />
              <div className="flex justify-center">
                <h1 className=" font-bold">Daging Giling Carne Molida Res</h1>
              </div>
            </div>
            <div className="border-solid border-2 border-red-100 bg-white rounded grid grid-cols-1 shadow-[#000000] drop-shadow-2xl">
              <div className="flex justify-center items-center">
                <Image
                  height={300}
                  width={300}
                  alt="12"
                  className="rounded pt-11"
                  src={require("./images/produk/daging_sirloin.webp")}
                />
              </div>
              <div className="flex justify-center items-end">
                <h1 className=" font-bold">Daging Sirloin</h1>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex justify-center mt-3">
              <div className="font-bold text-white w-fit h-fit bg-red-700 p-2 rounded">
                Beli Produk Kami Di Olshop Favoritmu
              </div>
            </div>
            <div className="flex justify-center items-center mt-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Link href={"#"}>
                    <Image
                      height={75}
                      width={75}
                      alt="12"
                      className="rounded shadow-[#000000] drop-shadow-2xl hover:scale-110 transition-transform"
                      src={require("./images/tokopedia.webp")}
                    />
                  </Link>
                </div>
                <div>
                  <Link href={"#"}>
                    <Image
                      height={75}
                      width={75}
                      alt="12"
                      className="rounded shadow-[#000000] drop-shadow-2xl hover:scale-110 transition-transform"
                      src={require("./images/Shopee.webp")}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
