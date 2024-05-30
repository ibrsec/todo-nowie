"use client";

import GoogleIcon from "@/assets/icons/GoogleIcon";
import { useAuthContext } from "@/context/AuthProvider";
import { toastInfo } from "@/helper/ToastifyNotify";
import { useState } from "react";

const LoginPage = () => {
  const [inputInfos, setInputinfos] = useState({
    
    email: "",
    password: "",
  });

  const { loginGoogle,loginWithGoogleAccount,sendResetEmail } = useAuthContext();

  const handleChange = (e) => {
    setInputinfos({
      ...inputInfos,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(inputInfos);
    loginGoogle(inputInfos);
    setInputinfos({ username: "", imageUrl: "", email: "", password: "" });
  };
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed xl:bg-[url('https://picsum.photos/1920/1080')] lg:bg-[url('https://picsum.photos/1024/1080')] md:bg-[url('https://picsum.photos/768/600')] sm:bg-[url('https://picsum.photos/640/400')] bg-[url('https://picsum.photos/500/600')]  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-violet-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-violet-200 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-violet-700">Login</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handlesubmit}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              > 
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="peer placeholder-transparent h-10 w-full border-b-2 rounded bg-violet-200 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Image url"
                    value={inputInfos.email}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email *
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="peer placeholder-transparent h-10 w-full border-b-2 rounded bg-violet-200 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Image url"
                    value={inputInfos.password}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password *
                  </label>
                </div>
                <div className="mt-2">
                  <span className="text-slate-500 cursor-pointer" onClick={()=>inputInfos.email ? sendResetEmail(inputInfos.email) : toastInfo("First enter a email")}>Forgot Password</span>
                </div>
                <div className="relative text-center">
                  <button
                    type="submit"
                    className="w-[280px] text-md  bg-violet-500 text-white hover:bg-violet-950  transition-all rounded-md px-2 py-3 "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button onClick={()=>loginWithGoogleAccount()} className=" w-[280px]  flex items-center bg-violet-500 border border-gray-300 rounded-lg shadow-md px-6 py-3 text-md font-medium text-gray-200 hover:bg-violet-950    transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500   gap-2"  >
              <GoogleIcon />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default LoginPage;