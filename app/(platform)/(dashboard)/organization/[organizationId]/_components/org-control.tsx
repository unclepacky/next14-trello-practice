"use client";
import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function OrgControl() {
  const params = useParams();
  const { setActive } = useOrganizationList();
  console.log("ORG CONTROL RAN");
  useEffect(() => {
    if (!setActive) return;

    setActive({ organization: params.organizationId as string });
  }, [params.organizationId, setActive]);

  return null;
}
