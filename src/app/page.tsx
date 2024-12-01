import { getServerSession } from "next-auth";
import { User } from "./ui/User";
import { Bot } from "./ui/Bot";

export default async function Home() {

  const user = await getServerSession();

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {user ? <>
        <section className="flex-1 flex flex-col justify-between gap-y-8 p-8">
          <User/>
        </section>
        <section className="flex-1 flex flex-col p-6">
          <Bot/>
        </section>
      </> : <></>}
    </main>
  );
}
