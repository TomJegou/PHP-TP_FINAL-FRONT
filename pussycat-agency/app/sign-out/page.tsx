import { cookies } from "next/headers";

import SignOutAction from "./SignOutAction";

export default async function SignOut() {
  async function deleteTokens() {
    "use server";

    cookies().delete("API_TOKEN");
  }

  return <SignOutAction deleteTokens={deleteTokens} />;
}