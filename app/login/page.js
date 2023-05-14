import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <div className="shadow-sm flex flex-col items-center justify-center max-w-2xl p-3 border space-y-3">
        <h1 className="p-5 font-bold text-2xl">Login</h1>
        <input type="email" placeholder="enter email" className="p-2" />
        <input type="password" placeholder="*****" className="p-2" />
        <button className="bg-purple-700 w-full p-2 text-white">Login</button>
        <Link href={"/"}>Back to home</Link>
      </div>
    </div>
  );
};

export default Login;
