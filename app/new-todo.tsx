import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function NewTodo() {
  const addTodo = async (formData: FormData) => {
    "use server";
    const title = String(formData.get("title"));
    const supabase = createServerActionClient<Database>({ cookies });
    await supabase.from("todos").insert({ title });
    revalidatePath("/");
  };

  return (
    <form action={addTodo}>
      <input name="title" className="bg-gray-800" />
    </form>
  );
}
