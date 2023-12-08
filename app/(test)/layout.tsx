import React, { ReactNode } from "react";

export default function TestLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <div>This is a Nav bar</div>
      {children}
    </div>
  );
}
