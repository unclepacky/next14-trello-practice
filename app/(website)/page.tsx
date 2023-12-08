import { Button } from "@/components/ui/button";
import { Home, Medal } from "lucide-react";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

import { Poppins } from "next/font/google";

import localFont from "next/font/local";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const buttonFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export default function WebsitePage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        {/* <Medal
          color="red"
          size={48}
          strokeWidth={1}
          absoluteStrokeWidth={false}
        /> */}
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Home className="h-6 w-6 mr-2" />
          Valley Green Residence
        </div>
      </div>
      <Button className={cn("mt-6", buttonFont.className)} size="lg" asChild>
        <Link href="/test">Guest</Link>
      </Button>
    </div>
  );
}
