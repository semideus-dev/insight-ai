import { AppLogo, GithubIcon, InstagramIcon } from "@/components/icons";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t hidden md:flex">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center md:justify-start justify-center text-white"
        >
          <AppLogo className="text-primary" width={30} height={30} />
          <span className="ml-3 text-xl">InsightAI</span>
        </Link>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2025 Gurshabad —
          <Link
            href="https://github.com/semideus-dev"
            className="text-muted-foreground ml-1 hover:underline underline-offset-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            @semideus.dev
          </Link>
        </p>
        <span className="flex items-center gap-4 ml-auto">
          <Link
            href="https://github.com/semideus-dev/insightai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon
              className="text-muted-foreground"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="https://www.instagram.com/semideus.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              className="text-muted-foreground"
              width={20}
              height={20}
            />
          </Link>
        </span>
      </div>
    </footer>
  );
}
