import React from "react";

export default function KontenContacts() {
  return (
    <div
      className="h-full w-full"
      style={{
        zIndex: 1,
      }}
    >
      <div>
        <div className="bg-red-800 w-full p-5 text-center font-bold text-3xl text-white">
          Kontak Kami
        </div>
      </div>
      <div className="bg-white h-full w-full grid grid-cols-2 items-center ">
        <div className="bg-red-700 flex items-center h-full ">
          <div className="grid grid-cols-1 gap-5">
            <p className="text-white font-bold">
              Kami Akan Menjawab Semua Pertanyaan Anda Mengenai Produk Atau
              Pengalaman Bersama Daging Merah.
            </p>
            <p className="text-white font-bold">
              Silakan Hubungi Kami Dan Kami Akan Berusaha Memberi Tanggapan
              Kepada Anda Sesegera Mungkin.
            </p>
          </div>
        </div>
        <div className="bg-red-400 flex items-center h-full ">test</div>
      </div>
    </div>
  );
}
