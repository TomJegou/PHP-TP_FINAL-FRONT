import { redirect } from "next/navigation";

export default function SignOutButton() {
    function onclickFunc() {
        redirect("/sign-out")
    }

    return (
        <button className="p-4 rounded-lg bg-plum flex flex-col flex-wrap justify-center items-center" onClick={onclickFunc}>
            Se déconnecter
        </button>
    )
}