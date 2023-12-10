import { UserButton, auth, currentUser, UserProfile } from "@clerk/nextjs";

export default async function MainPage() {
  const user = await currentUser();
  const varauth = auth();
  console.log("*******************", varauth);
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      {/* <UserProfile /> */}
      <div>MainPage</div>
      <div>First Name: {user?.firstName}</div>
      <div>User Name: {user?.username}</div>
      <div>User ID from user: {user?.id}</div>
      <div>User ID from Auth: {varauth?.userId}</div>
    </div>
  );
}
