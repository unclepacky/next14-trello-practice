import { Button } from "@/components/ui/button";
import { Home, Medal } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function WebsitePage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
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
      <Button className="mt-6" size="lg" asChild>
        <Link href="/test">Guest</Link>
      </Button>
    </div>
  );
}
