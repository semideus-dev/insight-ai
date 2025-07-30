"use client";

import React from "react";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { LoadingIcon, SignOutIcon } from "@/components/icons";
import CustomDialog from "@/components/custom/custom-dialog";

interface SignOutDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SignOutDialog({ open, setOpen }: SignOutDialogProps) {
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
    <CustomDialog title="Sign Out" open={open} onOpenChange={setOpen}>
      <div className="flex flex-col items-center justify-center gap-2">
        <SignOutIcon className="text-rose-400" width={60} height={60} />
        <span className="text-muted-foreground text-center text-lg md:text-xl">
          Leaving already... <br /> Are you sure about this?
        </span>
      </div>
      <br />
      <div className="flex flex-col items-center justify-center gap-2">
        <Button
          disabled={pending}
          onClick={() => setOpen(false)}
          className="w-full bg-white hover:bg-white/70"
        >
          Cancel 
        </Button>
        <Button
          onClick={handleSignOut}
          disabled={pending}
          variant="ghost"
          className="w-full border"
        >
          {pending ? <LoadingIcon className="animate-spin" /> : "Sign Out"}
        </Button>
      </div>
    </CustomDialog>
  );
}

export default function SignOutButton() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <SignOutDialog open={open} setOpen={setOpen} />
      <button
        className="cursor-pointer"
        onClick={() => setOpen((open) => !open)}
      >
        <SignOutIcon />
      </button>
    </>
  );
}