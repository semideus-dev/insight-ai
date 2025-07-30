"use client";

import React from "react";

import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback } from "../ui/avatar";

export default function UserButton() {
  const { data, isPending } = authClient.useSession();

  if (isPending || !data?.user) {
    return null;
  }
  return (
    <Avatar>
      <AvatarFallback>{data.user.name.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
