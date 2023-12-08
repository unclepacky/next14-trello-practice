import { Children } from "react";

interface UserIdPageProps {
  params: { id: string };
}

export default function UserIdPage({ params: { id } }: UserIdPageProps) {
  return <div>UserId : {id}</div>;
}
