import { createServerComponentClient } from '@/lib/serverSupabase'
import { redirect } from "next/navigation";

export default async function Unauthenticated() {
  const supabase = createServerComponentClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }

  return <p>Please sign in to see todos!</p>;
}
