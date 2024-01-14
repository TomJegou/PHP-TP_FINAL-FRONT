import Link from "next/link"

export default function SignUpForm() {
    return (
        <form className="bg-aquamarine border-[2px] border-solid w-[85vw] max-w-[500px] h-[60vh] max-h-[600px] rounded-xl flex flex-wrap flex-col justify-center items-center gap-6">
            <h2 className="text-3xl font-bold">Créer un compte</h2>
            <div className="w-full flex flex-col justify-center items-center gap-5">
                <div className="wrapper-input-text-login">
                    <label>Nom</label>
                    <input type="text" className="input-text-login" name="lastname" />
                </div>
                <div className="wrapper-input-text-login">
                    <label>Prénom</label>
                    <input type="text" className="input-text-login" name="firstname" />
                </div>
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
            <Link href={"/sign-in"} className="hover:underline">Possède un compte</Link>
        </form>
    )
}