import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchCustomerData } from "@/app/lib/userdata";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-lg">You need to sign in to access this page</p>
      </div>
    );
  }

  console.log(session);

  const customer = await fetchCustomerData(session.id);

  if (!customer) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-lg">You need to sign in to access this page</p>
      </div>
    );
  }

  console.log(customer);

  return (
    <div className="space-y-3">
      <div className="item space-y-1">
        <p className="text-gray-600">প্রোফাইল পিকচার</p>
        <div className="profile_pic flex items-center gap-4">
          <Image
            src={session?.user.image || "/avatar-default.png"}
            alt="User Profile"
            height={50}
            width={50}
            className="size-16 rounded-full"
          />
          <Link
            href={""}
            className="cursor-not-allowed rounded-lg bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
          >
            পরিবর্তন করুন
          </Link>
          <Link
            href={""}
            className="cursor-not-allowed rounded-lg bg-gray-200 px-4 py-2 text-sm text-rose-500 hover:bg-gray-300"
          >
            ডিলিট করুন
          </Link>
        </div>
      </div>
      <div className="item space-y-1">
        <label htmlFor="name" className="text-gray-600">
          প্রোফাইল নাম
        </label>
        <div className="profile_pic flex items-center gap-4">
          <input
            type="text"
            name="name"
            id="name"
            value={customer?.name}
            className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2"
            disabled
            readOnly
          />
        </div>
      </div>
      <div className="item space-y-1">
        <label htmlFor="email" className="text-gray-600">
          ইমেইল
        </label>
        <div className="profile_pic flex items-center gap-4">
          <input
            type="email"
            name="email"
            id="email"
            value={customer?.email}
            className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2"
            disabled
            readOnly
          />
        </div>
      </div>
      <div className="item space-y-1">
        <label htmlFor="mobile" className="text-gray-600">
          মোবাইল নাম্বার
        </label>
        <div className="profile_pic flex items-center gap-4">
          <input
            type="text"
            name="mobile"
            id="mobile"
            value={customer?.phone || "Not found!"}
            className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2"
            disabled
            readOnly
          />
        </div>
      </div>
      <div className="item space-y-1">
        <label htmlFor="mobile" className="text-gray-600">
          সাইন-ইন মেথড
        </label>
        <div className="profile_pic flex w-max items-center gap-2 rounded-md border border-gray-200 px-3 py-2">
          <Image
            src={
              customer?.provider === "google"
                ? "/icons/google.png"
                : customer?.provider === "facebook"
                  ? "/icons/facebook.png"
                  : "/icons/credential.png"
            }
            width={25}
            height={25}
            alt="provider"
          />
          <span className="capitalize">{customer?.provider}</span>
        </div>
      </div>
    </div>
  );
}
