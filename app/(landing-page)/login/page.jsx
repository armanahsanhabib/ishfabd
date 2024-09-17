// pages/login.js
"use client";

import Facebook from "@/public/icons/facebook.png";
import Google from "@/public/icons/google.png";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCredentialLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.error) {
      setError(res.error);
    } else {
      // Redirect on successful login
      router.push("/my-account");
    }
  };

  return (
    <div className="flex h-[80vh] items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-semibold text-blue-600">
          লগিন করুন
        </h2>

        {error && (
          <div className="mb-4 rounded-md bg-red-100 p-2 text-center text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleCredentialLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-blue-500 focus:outline-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-blue-500 focus:outline-2"
              placeholder="Your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="my-6 text-center text-sm text-gray-600">or</div>

        {/* Social Logins */}
        <div className="space-y-3">
          <button
            onClick={() => signIn("google")}
            className="flex w-full items-center justify-center gap-2 rounded-md border py-2 text-gray-700 hover:bg-gray-100"
          >
            <Image src={Google} alt="Google" className="h-5 w-5" />
            Continue with Google
          </button>

          <button
            onClick={() => signIn("facebook")}
            className="flex w-full items-center justify-center gap-2 rounded-md border py-2 text-gray-700 hover:bg-gray-100"
          >
            <Image src={Facebook} alt="Facebook" className="h-5 w-5" />
            Continue with Facebook
          </button>
        </div>

        {/* Sign up */}
        <p className="mt-5 text-center">
          একাউন্ট নেই? তাহলে{" "}
          <Link href={"/sign-up"} className="text-blue-600 hover:underline">
            'সাইন আপ'
          </Link>{" "}
          করুন
        </p>
      </div>
    </div>
  );
};

export default Login;
