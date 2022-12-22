import React from "react";
import Image from "next/image";
export default function KontenTentang() {
  return (
    <div
      className="w-fit h-fit flex justify-center items-center shadow-[#000000] drop-shadow-2xl"
      style={{ zIndex: 1 }}
    >
      <div
        className=" p-3 h-fit w-fit bg-red-700  flex justify-center items-center text-white"
        id="tentang"
      >
        PT.Daging Merah adalah perusahaan yang berdiri sejak tahun 1990 yang
        berfokus pada industri pangan khususnya daging sapi, <br />
        kami berkomitmen untuk menghadirkan solusi bahan pangan yang berkualitas
        dan terjangkau untuk masyarakat di indonesia <br />
        PT.Daging Merah bercita-cita untuk menyediakan daging sapi ke semua
        kalanganan masyarakat di indonesia sehingga <br />
        daging sapi bukan hanya bisa di nikmati oleh kalangan atas saja
        <span>
          <Image
            alt="Pabrik_Daging_Merah"
            src={require("./images/Daging_Merah_Factory.webp")}
            width={500}
            height={500}
            className="rounded shadow-[#000000] shadow-2xl"
          />
        </span>
      </div>
    </div>
  );
}
