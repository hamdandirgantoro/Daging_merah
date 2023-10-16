import React from "react";
import { useState } from "react";

export default function KontenContacts() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    judul: "",
    pesan: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData)
    try {
      const formMessage = await fetch("http://localhost:8000/feedback/create", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // if (!formMessage.ok) {
      //   throw new Error("Failed to submit the form");
      // }
      setFormData({
        nama:"",
        email:"",
        judul:"",
        pesan:"",
      })

      const responseData = await formMessage.json();
      const message = responseData.message;
      console.log(message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className=" items-center justify-center h-full w-full"
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
            <div className="py-4 lg:py-8 px-2 mx-auto max-w-screen-md">
              <p className="mb-4 lg:mb-8 text-center sm:text-xl text-white font-bold">
                Punya Pertanyaan Atau Keluhan ? Biarkan Kami Tau !
              </p>
              <form className="space-y-1">
                <div>
                  <label
                    htmlFor="nama"
                    className="block mb-1 text-sm font-medium text-white"
                  >
                    nama
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="nama"
                    required
                    onChange={handleChange}
                    value={formData.nama}
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-white"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@mail.com"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor="judul"
                    className="mt-3 block mb-1 text-sm font-medium text-white"
                  >
                    judul
                  </label>
                  <input
                    type="text"
                    id="judul"
                    name="judul"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                    onChange={handleChange}
                    value={formData.judul}
                  ></input>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="pesan"
                    className="block mb-1 text-sm font-medium text-white"
                  >
                    Pesanmu
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows={6}
                    className="block p-1.5  w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Tulis Pesanmu"
                    onChange={handleChange}
                    value={formData.pesan}
                  ></textarea>
                </div>
                <div className="pt-3 flex justify-center">
                <button
                  type="submit"
                  className="bg-red-600 py-2 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleSubmit}
                  >
                  Kirim
                </button>
                  </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
