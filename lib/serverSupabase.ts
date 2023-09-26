import { createServerComponentClient as _createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cache } from "react";

/*
  fix [Error]: Dynamic server usage: Page couldn't be rendered statically because it used `cookies`
  The error happends when use `npm run build`
 */
export const createServerComponentClient = cache(() => {
  const cookieStore = cookies()
  return _createServerComponentClient<Database>({ cookies: () => cookieStore })
})