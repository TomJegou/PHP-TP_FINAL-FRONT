import HomeButton from "@/app/home-button"

export default async function CreateHero() {
    async function submitForm( formData: FormData ) {
        'use server'
        let apiHostname = "localhost:8000"
        if (process.env.API_HOSTNAME != undefined) {
            apiHostname = process.env.API_HOSTNAME
        }
        let payload = {
            "name": formData.get("name"),
            "secret_identity": formData.get("secret_identity"),
            "gender": formData.get("gender"),
            "hair_color": formData.get("hair_color"),
            "origin_planet": formData.get("origin_planet"),
            "description": formData.get("description"),
        }
        console.log(payload)
    }

    return (
        <div className="flex flex-wrap flex-col justify-center items-center mt-12 gap-10">
            <HomeButton />
            <h1 className="text-5xl text-aquamarine">Créer un super Hero</h1>
            <form
                className="flex flex-col justify-center items-center gap-12"
                action={submitForm}
            >
                <div
                    className="flex flex-col justify-center item-start"
                >
                    <label>Nom</label>
                    <input className="p-1 rounded-lg" type="text" name="name" required />
                </div>
                <div
                    className="flex flex-col justify-center item-start"
                >
                    <label>Identité secrete</label>
                    <input className="p-1 rounded-lg" type="text" name="secret_identity" required />
                </div>
                <div
                    className="flex flex-col justify-center item-start"
                >
                    <label>Genre</label>
                    <input className="p-1 rounded-lg" type="text" name="gender" required />
                </div>
                <div
                    className="flex flex-col justify-center item-start"
                >
                    <label>Couleur de cheveux</label>
                    <input className="p-1 rounded-lg" type="text" name="hair_color" required />
                </div>
                <div
                    className="flex flex-col justify-center item-start"
                >
                    <label>Planete d'origine</label>
                    <input className="p-1 rounded-lg" type="text" name="origin_planet" required />
                </div>
                <div
                    className="flex flex-col justify-center item-start"
                >
                    <label>Description</label>
                    <textarea
                        name="description"
                        className="p-2 rounded-lg min-w-[500px]"
                        required
                    />
                </div>
                <input type="submit" value="Valider" className="button bg-plum p-4 rounded-lg text-azure" />
            </form>
        </div>
    )
}