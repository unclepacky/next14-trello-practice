import Logo from "@/components/shared-components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full h-20 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="flex">
          <Button asChild variant="ghost">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/gallery">Gallery</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/contact-us">Contact us</Link>
          </Button>
        </div>

        <div className="md:block md:w-auto flex items-center justify-between w-full space-x-4">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
