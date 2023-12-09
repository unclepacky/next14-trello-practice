import { cn } from "@/lib/utils";
import { BookImage } from "lucide-react";
import { Poppins } from "next/font/google";

import localFont from "next/font/local";
import Link from "next/link";

const headingFont = localFont({
  src: "../../../public/fonts/font.woff2",
});

const buttonFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export default function GalleryPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <BookImage className="h-6 w-6 mr-2" />
          Valley Green Residence
        </div>
      </div>
      <div className="border-2 py-2 px-6 rounded-full bg-amber-50 text-amber-700 font-bold">
        <span>Gallery</span>
      </div>
      {/* <Button className={cn("mt-6", buttonFont.className)} size="lg" asChild>
        <Link href="/test">Portal</Link>
      </Button> */}
    </div>
  );
}
