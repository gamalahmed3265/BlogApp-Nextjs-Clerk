import { Routes } from "@/lib/enum";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { LayoutDashboard, LogIn } from "lucide-react";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <Link className="font-black text-xl" href={Routes.ROOT}>
          NextClerk 🎯
        </Link>
        <div className="flex gap-2">
          <SignedIn>
            <Link
              className={`${buttonVariants()} uppercase`}
              href={Routes.DASHBOARD}
            >
              <LayoutDashboard />
              dashboard
            </Link>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant="outline">
                <LogIn />
                signin
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
