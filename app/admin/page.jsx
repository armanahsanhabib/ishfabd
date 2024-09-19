"use client";

import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import { CiAt } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { LuKeyRound } from "react-icons/lu";
import { lusitana } from "../fonts";
import { adminLogin } from "../lib/login";
import LoginButton from "./login-button";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialState = { message: null, errors: {} };
  const [state, formAction] = useFormState(adminLogin, initialState);

  return (
    <main className={`flex items-center justify-center md:h-screen`}>
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 px-3 py-4 sm:p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-sky-600 p-3 md:h-36">
          <div className={`${lusitana.className} text-white`}>
            <Link href={"/"} className="flex items-center gap-2">
              <FaUserGear className="mb-2 text-5xl" />
              <span className="text-3xl font-medium">Admin Login</span>
            </Link>
          </div>
        </div>
        <form action={formAction} className="space-y-3">
          <input type="hidden" name="role" value="admin" />
          <div className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-6 pb-4 pt-8">
            <h1 className={`${lusitana.className} mb-3 text-2xl`}>
              Please log in to continue.
            </h1>
            {state.message && (
              <p className="mt-2 text-sm text-rose-500">{state.message}</p>
            )}
            <div className="w-full">
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:outline-sky-600"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <CiAt className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 focus:outline-blue-600"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={6}
                  />
                  <LuKeyRound className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  <div
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-lg"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <LoginButton />
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            ></div>
          </div>
        </form>
      </div>
    </main>
  );
}
