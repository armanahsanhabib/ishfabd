import { validateToken } from "@/app/lib/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import Sidebar from "./sidebar";

export const metadata = {
  title: "Dashboard | Ishfabd",
  description: "Dashboard for managing products, customers and stocks.",
};

export default async function Layout({ children }) {
  const cookieStore = cookies();
  const token = cookieStore.get("adminToken")?.value;

  const validatedToken = await validateToken(token);
  const isExist = cookies().has("adminToken");

  if (!isExist || !validatedToken.valid) {
    redirect("/admin");
  }

  return (
    <div className={`flex h-screen flex-row overflow-hidden`}>
      <div className="flex-none">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-hidden bg-gray-100">
        <NextTopLoader />
        {children}
      </div>
    </div>
  );
}
