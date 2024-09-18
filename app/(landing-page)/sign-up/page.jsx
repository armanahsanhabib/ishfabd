"use client";

import { createUser } from "@/app/lib/signup";
import Facebook from "@/public/icons/facebook.png";
import Google from "@/public/icons/google.png";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    startTransition(async () => {
      try {
        // Call the server action to create a user
        const result = await createUser({ name, email, password });

        if (result.success) {
          // Automatically sign in the user after successful sign-up
          const signInResult = await signIn("credentials", {
            redirect: false,
            email,
            password,
          });

          if (!signInResult.error) {
            // Redirect to account page after successful sign-in
            router.push("/my-account");
          } else {
            setError(signInResult.error);
          }
        }
      } catch (err) {
        setError(err.message || "Failed to sign up");
      }
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 sm:h-[80vh]">
      <div className="w-full max-w-md border-gray-200 bg-white p-6 shadow-md sm:rounded-lg sm:border">
        <h2 className="mb-6 text-center text-2xl font-semibold text-blue-600">
          সাইন আপ করুন
        </h2>

        {error && (
          <div className="mb-4 rounded-md bg-red-100 p-2 text-center text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 outline-blue-500 focus:outline-2"
              placeholder="Your name"
            />
          </div>
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
            disabled={isPending}
            className={`w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400 ${isPending && "cursor-not-allowed"}`}
          >
            {isPending ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="my-6 text-center text-sm text-gray-600">or</div>

        {/* Social Sign-ups */}
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

        {/* Link to Log in */}
        <p className="mt-5 text-center">
          একাউন্ট আছে? তাহলে{" "}
          <Link href={"/login"} className="text-blue-600 hover:underline">
            'লগিন'
          </Link>{" "}
          করুন
        </p>
      </div>
    </div>
  );
};

export default SignUp;
