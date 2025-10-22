import { auth, signOut } from "@/auth";

// signOut only for server components

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      {/* {JSON.stringify(session)} */}
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
      <p>Settings Page</p>
      <form action={async () => {
        "use server";
        await signOut();
      }}>
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
