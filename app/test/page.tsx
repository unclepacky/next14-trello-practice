import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function TestPage() {
  return (
    <>
      <nav className="flex items-center justify-center">
        <Button asChild>
          <Link href="/" className="flex items-center justify-center gap-4">
            <Home />
            <div>Home</div>
          </Link>
        </Button>
      </nav>
      <div>TestPage</div>
    </>
  );
}
