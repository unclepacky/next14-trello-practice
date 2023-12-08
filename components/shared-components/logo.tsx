import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo_fb.jpg"
          alt="Company Logo"
          width={70}
          height={70}
          className="rounded-full"
        />
      </div>
    </Link>
  );
}
