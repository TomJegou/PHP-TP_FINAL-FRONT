import { redirect } from "next/navigation";

export default async function SignOutButton() {
    async function onclickFunc() {
        'use server'
        redirect("/sign-out")
    }

    return (
        <form className="button text-azure p-4 rounded-lg bg-plum flex flex-col flex-wrap justify-center items-center absolute top-4 right-4" action={onclickFunc}>
            <input type="submit" value="Se déconnecter" />
        </form>
    )
}