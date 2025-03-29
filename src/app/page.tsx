import { db } from "@/lib/db";

export default async function Home() {
  const user = await db.user.findMany();
  return (
    <main className="min-h-screen grid place-items-center">
      {JSON.stringify(user)}
    </main>
  );
}
