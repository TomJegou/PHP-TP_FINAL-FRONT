import HeroCard from "./hero"

async function getHeroes() {
    let apiHostname = "localhost:8000" 
    if (process.env.API_HOSTNAME != undefined) {
        apiHostname = process.env.API_HOSTNAME
    }
    const res = await fetch(`http://${apiHostname}/api/gethero`, {
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
            className="flex flex-col flex-wrap justify-start items-center gap-9"
        >
            <h1 className="text-5xl text-aquamarine">Choisissez un hero</h1>
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