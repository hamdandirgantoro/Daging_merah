import React from "react";

export default function KontenContacts() {
  return (
    <div
      className=" items-center justify-center h-screen w-screen"
      style={{
        zIndex: 1,
      }}
    >
      <div className="bg-red-800 font-bold text-3xl text-white flex justify-center items-center p-5">
        Kontak Kami
      </div>
      <div className="grid grid-cols-2 ">
        <div className="h-screen bg-red-700 items-center flex">
          <div className="grid grid-cols-1 gap-5">
            <div className="font-bold text-white">
              Kami akan menjawab semua pertanyaan Anda mengenai produk atau
              pengalaman bersama Daging Merah.{" "}
            </div>
            <div className="font-bold text-white">
              Silakan Kirim Pesan Kepada kami dan kami akan berusaha memberi
              tanggapan kepada Anda sesegera mungkin.
            </div>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center p-5">
          <section className=" w-full bg-red-600 dark:bg-red-800">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <p className="mb-8 lg:mb-16 text-center sm:text-xl text-white font-bold">
                Punya Pertanyaan Atau Keluhan ? Biarkan Kami Tau !
              </p>
              <form action="#" className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    judul
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  ></input>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                  >
                    Pesanmu
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-800 mt-4 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
