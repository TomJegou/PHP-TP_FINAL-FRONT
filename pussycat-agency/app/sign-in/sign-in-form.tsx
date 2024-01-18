import Link from "next/link"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export default async function LoginForm() {
    async function submitForm(formData: FormData) {
        'use server'
        let apiHostname = "localhost:8000"
        if (process.env.API_HOSTNAME != undefined) {
            apiHostname = process.env.API_HOSTNAME
        }
        const resp = await fetch(`http://${apiHostname}/api/connect`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": formData.get("email"),
                "password": formData.get("password"),
            })
        })
        if (!resp.ok) {
            console.log("Error")
        } else {
            let payloadResponse = await resp.json()
            cookies().set("API_TOKEN", payloadResponse["cookie"])
            redirect("/dashboard")
        }
    }

    return (
        <form className="bg-aquamarine border-[2px] border-solid w-[85vw] max-w-[500px] h-[60vh] max-h-[600px] rounded-xl flex flex-wrap flex-col justify-center items-center gap-6" action={submitForm}>
            <h2 className="text-3xl font-bold">Se connecter</h2>
            <div className="w-full flex flex-col justify-center items-center gap-5">
                <div className="wrapper-input-text-login">
                    <label>Adresse mail</label>
                    <input type="text" className="input-text-login" name="email" />
                </div>
                <div className="wrapper-input-text-login">    
                    <label>Mot de passe</label>
                    <input type="text" className="input-text-login" name="password" />
                </div>
            </div>
            <input
                type="submit"
                className="button bg-plum p-4 rounded-lg w-[30vw] max-w-[200px] flex flex-col justify-center items-center cursor-pointer border-[3px] border-solid"
                value="valider"
            />
            <Link href={"/sign-up"} className="hover:underline">Créer un compte</Link>
        </form>
    )
}