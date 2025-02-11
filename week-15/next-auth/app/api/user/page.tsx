import { getServerSession } from "next-auth"
import { NEXT_AUTH_CONFIG } from "@/app/lib/auth"
async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return session;
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
        <div> {JSON.stringify(session)} </div>
        <div> {JSON.stringify(session?.user?.email)}</div>
    </div>
  );
}