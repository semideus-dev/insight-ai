import { AppLogo } from "@/components/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface AuthCardProps {
  title: string;
  children: React.ReactNode;
}

export default function AuthCard({ title, children }: AuthCardProps) {
  return (
    <Card className="h-fit bg-background/10 backdrop-blur-2xl border-white/10 w-[90%] md:w-[480px]">
      <CardHeader>
        <Link href={"/"}>
          <AppLogo width={60} height={60} />
        </Link>
        <CardTitle className="text-3xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
