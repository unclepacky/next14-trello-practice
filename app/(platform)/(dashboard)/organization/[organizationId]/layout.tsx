import OrgControl from "./_components/org-control";

export default function OrganizationIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-amber-200  w-full">
      <OrgControl />
      {children}
    </div>
  );
}
