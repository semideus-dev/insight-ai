"use client";

import { z } from "zod";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";

const formSchema = z.object({
  name: z.string().min(1),
});

export default function UserInfo() {
  const { data } = authClient.useSession();

  if (!data) return null;

  return (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <Avatar>
          <AvatarFallback>
            {data.user.email.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm text-muted-foreground">Signed in as</p>
          <p className="font-medium">{data.user.email}</p>
        </div>
      </div>
    </div>
  );
}
