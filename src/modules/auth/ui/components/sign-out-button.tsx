"use client";

import React from "react";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  const [pending, setPending] = React.useState(false);

  const router = useRouter();
  function handleSignOut() {
    setPending(true);
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("You have been signed out successfully.");
          router.push("/sign-in");
          setPending(false);
        },
        onError: ({ error }) => {
          toast.error(error.message || "Something went wrong");
          setPending(false);
        },
      },
    });
  }
  return (
    <Button onClick={handleSignOut} disabled={pending}>
      {pending ? "Signing out..." : "Sign out"}
    </Button>
  );
}
