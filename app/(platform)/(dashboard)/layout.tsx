import React from "react";
import Navbar from "./_components/Navbar";

// interface Props {
//   children: React.ReactNode;
// }

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
}
