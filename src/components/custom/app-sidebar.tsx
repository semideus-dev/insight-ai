import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";

import { headerItems, footerItems } from "@/lib/constants";
import SignOutButton from "@/modules/auth/ui/components/sign-out-button";
import { AppLogo } from "../icons";

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-none">
      <SidebarHeader className="items-center">
        <AppLogo width={45} height={45} className="text-white hover:text-primary transition-all duration-200" />
      </SidebarHeader>
      <SidebarContent className="mt-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col items-center gap-10">
              {headerItems.map((item) => (
                <Link
                  href={item.link}
                  key={item.link}
                  className="hover:bg-muted/80 rounded-xl p-2"
                >
                  <item.icon />
                </Link>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col items-center gap-10">
              {footerItems.map((item) => (
                <Link
                  href={item.link}
                  key={item.link}
                  className="hover:bg-muted/80 rounded-xl p-2"
                >
                  <item.icon />
                </Link>
              ))}
              <SignOutButton />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
