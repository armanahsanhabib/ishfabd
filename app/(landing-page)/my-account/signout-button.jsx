"use client";

import { signOut } from "next-auth/react";
import { TbLogout2 } from "react-icons/tb";

const SignoutButton = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })} className="">
      <TbLogout2 />
      সাইন-আউট
    </button>
  );
};

export default SignoutButton;
