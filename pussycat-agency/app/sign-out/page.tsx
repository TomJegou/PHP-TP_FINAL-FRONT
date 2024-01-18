import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import SignOutAction from "./SignOutAction"

export default async function SignOut() {
  async function deleteTokens() {
    "use server"
    cookies().delete("API_TOKEN")
    redirect("/")
  }

  return <SignOutAction deleteTokens={deleteTokens} />;
}