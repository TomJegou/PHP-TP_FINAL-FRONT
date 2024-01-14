export default async function CreateHero() {
    async function submitForm( formData: FormData ) {
        'use server'
        let apiHostname = "localhost:8000"
        if (process.env.API_HOSTNAME != undefined) {
            apiHostname = process.env.API_HOSTNAME
        }
        let payload = {

        }
        console.log(payload)
    }

    return (
        <div className="flex flex-wrap flex-col justify-center items-center mt-12 gap-10">
            <h1 className="text-5xl text-aquamarine">Créer un super Hero</h1>
            <form
                className="flex flex-col justify-center items-center gap-12"
            >
                <div
                    className="flex flex-col justify-center item-start"
                >
                    <label>Nom</label>
                    <input className="p-1 rounded-lg" type="text" name="" required />
                </div>
                <div
                    className="flex flex-col justify-center item-start"
                >
                    <label>Identité secrete</label>
                    <input className="p-1 rounded-lg" type="text" name="" required />
                </div>
                <div
                    className="flex flex-col justify-center item-start"
                >
                    <label>Genre</label>
                    <input className="p-1 rounded-lg" type="text" name="" required />
                </div>
                <div
                    className="flex flex-col justify-center item-start"
                >
                    <label>Couleur de cheveux</label>
                    <input className="p-1 rounded-lg" type="text" name="" required />
                </div>
                <div
                    className="flex flex-col justify-center item-start"
                >
                    <label>Planete d'origine</label>
                    <input className="p-1 rounded-lg" type="text" name="" required />
                </div>
                <div
                    className="flex flex-col justify-center item-start"
                >
                    <label>Description</label>
                    <textarea
                        name=""
                        className="p-2 rounded-lg min-w-[500px]"
                        required
                    />
                </div>
                <input type="submit" value="Valider" className="bg-plum p-4 rounded-lg text-azure" />
            </form>
        </div>
    )
}