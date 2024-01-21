import HomeButton from "../home-button"
import SignOutButton from "../sign-out/SignOutButton"
import Link from "next/link"
import Heroes from "./heroes"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

async function getHeroes() {
    let apiHostname = "localhost:8000" 
    if (process.env.API_HOSTNAME != undefined) {
        apiHostname = process.env.API_HOSTNAME
    }
    const res = await fetch(`http://${apiHostname}/api/heroes`, {
        method: 'GET',
        headers: {},
        body: null,
        cache: "no-cache"
    })
    if (!res.ok) {
        redirect("/")
    }
    return res.json()
}

export default async function Dashboard () {
    if (cookies().get("API_TOKEN") == undefined) {
        redirect("/")
    }
    const data = await getHeroes()

    return (
        <div
            className="flex flex-col flex-wrap justify-start items-center gap-9 w-[95vw]"
        >
            <SignOutButton />
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
            <Heroes data={data} />
        </div>
    )
}