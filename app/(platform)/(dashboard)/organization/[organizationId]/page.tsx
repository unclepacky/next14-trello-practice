import { OrganizationSwitcher, auth, currentUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

interface Props {
  params: { organizationId: string };
}

export default async function OrganizationIdPage({
  params: { organizationId },
}: Props) {
  const user = await currentUser();
  const { userId, orgId, orgRole, orgSlug } = auth();
  return (
    <div>
      <div>OrganizationIdPage : {organizationId}</div>
      <div className="bg-amber-200">
        <ol>
          <li>userId : {userId}</li>
          <li>orgId : {orgId}</li>
          <li>orgRole : {orgRole}</li>
          <li>orgSlug : {orgSlug}</li>
        </ol>
      </div>
      <div>UserName is : {user?.firstName}</div>
      <div>UserID is : {user?.id}</div>

      {/* <div className="rounded-full overflow-hidden w-[75px] h-[75px] object-contain"> */}
      <div className="rounded-full overflow-hidden w-[75px] h-[75px]">
        <Image
          src={user?.imageUrl || "/noavatar.png"}
          alt="Profile Pic"
          width={75}
          height={75}
          className=" object-cover h-full w-full"
        />
      </div>
      <OrganizationSwitcher hidePersonal />
    </div>
  );
}
