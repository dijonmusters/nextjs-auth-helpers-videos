import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import NewTodo from "./new-todo";
import RealtimeTodos from "./realtime-todos";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/unauthenticated");
  }

  const { data: todos } = await supabase
    .from("todos")
    .select()
    .match({ is_complete: false });

  return (
    <>
      <h1>Hello, {session.user.email}</h1>
      {/* @ts-expect-error this will be fixed in TS */}
      <NewTodo />
      <RealtimeTodos todos={todos ?? []} />
    </>
  );
}
