"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { useIsMobile } from "@/hooks/use-mobile";

import UserButton from "@/components/custom/user-button";

import { Button } from "@/components/ui/button";
import { SignOutIcon } from "@/components/icons";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { headerItems } from "@/lib/constants";
import Link from "next/link";
import {
  SignOutDialog,
} from "@/modules/auth/ui/components/sign-out-button";
import { getPageTitle } from "@/lib/utils";

export default function AppNavbar() {
  const isMobile = useIsMobile();

  const pathname = usePathname();
  const title = getPageTitle(pathname);

  const [open, setOpen] = React.useState(false);


  function MobileNav() {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" className="border">
            {title}
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Navigation</DrawerTitle>
          </DrawerHeader>
          <div className="m-2 grid grid-cols-3 gap-4">
            {headerItems.map((item) => (
              <Link
                className="flex flex-col items-center justify-center gap-2 rounded-xl border p-4"
                href={item.link}
                key={item.link}
              >
                <item.icon />
                <span>{item.title}</span>
              </Link>
            ))}
            <button
              className="flex flex-col items-center justify-center gap-2 rounded-xl border p-4"
              onClick={() => setOpen((open) => !open)}
            >
              <SignOutIcon />
              <span>Sign Out</span>
            </button>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <>
      <SignOutDialog open={open} setOpen={setOpen} />
      <nav className="flex h-[66px] items-center justify-between px-4 md:px-0 md:pr-4">
        <div className="flex items-center gap-2">
          {isMobile ? (
            <MobileNav />
          ) : (
            <Button variant="ghost" className="pointer-events-none border">
              {title}
            </Button>
          )}
        </div>
        <UserButton />
      </nav>
    </>
  );
}
