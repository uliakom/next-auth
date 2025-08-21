import { auth } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();
    return <div><p>Settings Page</p></div>;
};

export default SettingsPage;
