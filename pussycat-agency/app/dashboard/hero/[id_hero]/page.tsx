import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import HeroComponent from "./hero"
import HomeButton from "@/app/home-button"

async function getHero(id: number) {
    let apiHostname = "localhost:8000"
    if (process.env.API_HOSTNAME != undefined) {
        apiHostname = process.env.API_HOSTNAME
    }
    const response = await fetch(`http://${apiHostname}/api/hero/${id}`)
    if (!response.ok) {
        redirect("/")
    }
    return response.json()
}

export default async function Hero({
    params,
 }: {
    params: { id_hero: number }
 }) {
    if (cookies().get("API_TOKEN") == undefined) {
        redirect("/")
    }
    const hero = await getHero(params.id_hero)
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <HomeButton />
            <HeroComponent hero={hero.data} />
        </div>
    )
}