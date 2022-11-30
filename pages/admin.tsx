import React from "react";

function Login() {
  return (
    <body className="bg-gray-10 ">
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">
            LOGIN
          </h1>
          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-red-500"
              placeholder="Email karyawan"
            ></input>
          </div>
          <div className="w-3/4 mb-6">
            <input
              type="password"
              name="password"
              id="password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-red-500 "
              placeholder="Password"
            ></input>
          </div>
          <div className="w-3/4 flex flex-row justify-between">
            <div>
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-red-500"
              ></a>
            </div>
          </div>
          <div className="w-3/4 mt-4">
            <button
              type="submit"
              className="py-4 bg-red-400 w-full rounded text-red-50 font-bold hover:bg-red-700"
            >
              {" "}
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default function Admin() {
  return (
    <div>
      <Login />
    </div>
  );
}
