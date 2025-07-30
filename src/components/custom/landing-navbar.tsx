import Link from "next/link";
import React from "react";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { AppLogo } from "@/components/icons";

export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="fixed w-full h-16 z-10 flex items-center justify-center">
      <div className="border rounded-full bg-white/5 backdrop-blur-lg border-white/10 flex items-center w-[90%] md:w-[70%] mt-10 h-full justify-between p-2 px-8">
        <Link href="/" className="flex items-center gap-2">
          <AppLogo className="text-primary" width={30} height={30} />
          <span className="text-2xl hidden md:flex font-semibold tracking-tight">
            InsightAI
          </span>
        </Link>
        {session ? (
          <div className="flex items-center gap-8">
            <Link
              className="hover:underline underline-offset-8 hover:text-primary"
              href="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="hover:underline underline-offset-8 hover:text-primary"
              href="/settings"
            >
              Settings
            </Link>
          </div>
        ) : (
            <Link
              className="hover:underline underline-offset-8 hover:text-primary"
              href="/sign-in"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
