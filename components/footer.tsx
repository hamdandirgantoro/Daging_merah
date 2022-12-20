import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FooterWeb() {
  return (
    <footer
      className="bg-gradient-to-r from-red-700 via-red-600 to-red-600 h-fit w-full absolute grid grid-cols-1"
      id="contact"
      style={{ zIndex: 0 }}
    >
      <div className="grid grid-cols-3">
        <div className="flex justify-start">
          <div className="shadow-[#000000] shadow-sm rounded m-3 p-3 h-fit w-fit bg-red-800 flex items-center justify-center space-x-5">
            <div className="text-white font-semibol shadow-[#000000] drop-shadow-xl">
              Temukan Kami Di
            </div>
            <div className="flex justify-center items-center space-x-3 bg-white rounded-md py-1 pl-1 pr-2">
              <Link href={"#"}>
                <Image
                  alt="facebook"
                  src={require("/components/images/Facebook.svg")}
                  className="h-12 w-12 hover:scale-125 transition-transform"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  alt="instagram"
                  src={require("/components/images/Instagram.svg")}
                  className="h-10 w-10 hover:scale-125 transition-transform"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  alt="twitter"
                  src={require("/components/images/Twitter.svg")}
                  className="h-10 w-10 hover:scale-125 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <h6 className="text-red-200 font-bold">
            © 2022 Hak Cipta PT Daging Merah
          </h6>
        </div>
        <div className="flex justify-end items-end">
          <Image
            alt="kandang sapi vector"
            src={require("/components/images/Barn.webp")}
            className="h-24 w-36"
          />
        </div>
      </div>
    </footer>
  );
}
