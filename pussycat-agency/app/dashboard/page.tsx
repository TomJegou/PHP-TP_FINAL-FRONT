import HomeButton from "../home-button"
import HeroCard from "./hero"
import Link from "next/link"

async function getHeroes() {
    let apiHostname = "localhost:8000" 
    if (process.env.API_HOSTNAME != undefined) {
        apiHostname = process.env.API_HOSTNAME
    }
    const res = await fetch(`http://${apiHostname}/api/heroes`, {
        method: 'GET',
        headers: {},
        body: null,
        cache: "no-store"
    })
    if (!res.ok) {
        console.log("Error fetching /api/gethero")
    }
    return res.json()
}

export default async function Dashboard () {
    const data = await getHeroes()
    return (
        <div
            className="flex flex-col flex-wrap justify-start items-center gap-9 w-[95vw]"
        >
            <HomeButton />
            <div className="w-[100vw] h-24 flex flex-row flex-wrap justify-center items-center gap-6">    
                <Link
                    href="/dashboard/create/hero"
                    className="button p-4 bg-aquamarine text-azure rounded-lg flex flex-col flex-wrap justify-center items-center"
                >
                    Créer un Hero
                </Link>
                <Link
                    href="/dashboard/create/superpower"
                    className="button p-4 bg-aquamarine text-azure rounded-lg flex flex-col flex-wrap justify-center items-center"
                >
                    Créer un super pouvoir
                </Link>
                <Link
                    href="/dashboard/create/vehicle"
                    className="button p-4 bg-aquamarine text-azure rounded-lg flex flex-col flex-wrap justify-center items-center"
                >
                    Créer un véhicule
                </Link>
            </div>
            <h1 className="text-5xl text-aquamarine mt-7">Choisissez un hero</h1>
            <div
                className="flex flex-row flex-wrap justify-start items-center gap-9"
            >
                {
                    data.data.map((hero : {"name": string, "description": string}, index : number) => (
                        <HeroCard hero={hero} key={index} index={index} />
                    ))
                }
            </div>
        </div>
    )
}