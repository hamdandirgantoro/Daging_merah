import React, { useEffect, useState } from "react";

export default function Lowongan() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    deskripsi: "",
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
    try {
      const formMessage = await fetch("http://localhost:8000/surat/create", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!formMessage.ok) {
        throw new Error("Failed to submit the form");
      }
      setFormData({
        nama:"",
        email:"",
        deskripsi:""
      })

      const responseData = await formMessage.json();
      const message = responseData.message;
      console.log(message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-red-800 h-screen w-screen flex flex-col gap-5 justify-center">
      <header className="flex flex-col p-5 text-white bg-red-900">
      <h1 className="text-xl font-extrabold text-center">Kirim Detail Surat Lamaran Pekerjaan Anda Ke Kami</h1>
      <p className="mt-5 text-center">Setelah anda selesai mengirim, mohon tunggu bebrapa hari kerja untuk info lebih lanjut yang akan kami kirimkan ke email anda</p>
      </header>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="mx-auto flex flex-col w-3/6 gap-3 text-black bg-red-600 p-5 rounded-lg"
      >
        <input
          type="text"
          name="nama"
          placeholder="nama"
          className="rounded p-2 focus:scale-105 transition-transform"
          onChange={handleChange}
          value={formData.nama}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="rounded p-2 focus:scale-105 transition-transform"
          onChange={handleChange}
          value={formData.email}
        />
        <textarea
          name="deskripsi"
          placeholder="deskripsi"
          className="rounded p-2 resize-y focus:scale-105 transition-transform h-64"
          onChange={handleChange}
          value={formData.deskripsi}
          rows={10}
        ></textarea>
        <input type="submit" value={"Submit"} className="mx-auto mt-3 h-fit w-fit py-2 px-4 bg-red-400 text-red-900 border-red-500 hover:scale-110 transition-all border-2 shadow-lg rounded cursor-pointer font-mono font-semibold" />
      </form>
    </div>
  );
}
