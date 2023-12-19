import Link from "next/link"

export default function SignUpForm() {
    return (
        <form className="bg-aquamarine border-[2px] border-solid w-[85vw] max-w-[500px] h-[60vh] max-h-[600px] rounded-xl flex flex-wrap flex-col justify-center items-center gap-6">
            <h2 className="text-3xl font-bold">Créer un compte</h2>
            <div className="w-full flex flex-col justify-center items-center gap-5">
                <div className="wrapper-input-text-login">
                    <label>identifiant</label>
                    <input type="text" className="input-text-login" />
                </div>
                <div className="wrapper-input-text-login">    
                    <label>Mot de passe</label>
                    <input type="text" className="input-text-login" />
                </div>
            </div>
            <input
                type="submit"
                className="submit-button-login bg-plum p-4 rounded-lg w-[30vw] max-w-[200px] flex flex-col justify-center items-center cursor-pointer"
                value="valider"
            />
            <Link href={"/sign-in"} className="hover:underline">Possède un compte</Link>
        </form>
    )
}