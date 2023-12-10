import { OrganizationList } from "@clerk/nextjs";

export default async function SelectOrgPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
    />
  );
}
