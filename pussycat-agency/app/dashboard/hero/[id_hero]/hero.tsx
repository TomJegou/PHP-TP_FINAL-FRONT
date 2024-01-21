export default function HeroComponent({
    hero,
} :
{
    hero : {
        "id": number,
        "name": string,
        "description": string,
        "secret_identity": string,
        "gender": string,
        "hair_color": string,
        "origin_planet": string,
        "cities": {
            "id": number
            "name": string
        }[],
        "groups": {
            "id": number,
            "name": string,
        }[],
        "superpowers": {
            "id": number,
            "name": string
        }[],
        "gadgets": {
            "id": number,
            "name": string,
        }[],
    }
}) {
    return (
        <div className="flex flex-col flex-wrap justify-center items-center gap-6">
            <p className="text-6xl text-azure">{hero.name}</p>
            <div
                className="flex flex-row flex-wrap gap-6"
            >

                <p>{hero.description}</p>
                <p>{hero.gender}</p>
                <p>{hero.hair_color}</p>
                <p>{hero.origin_planet}</p>
                <div className="flex flex-col flex-wrap justify-center items-center gap-5">
                    {
                        hero.cities.map((city: {"id": number, "name": string}) => (
                            <div className="" key={city.id}>{city.name}</div>
                        ))
                    }
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center gap-5">
                    {
                        hero.groups.map((group: {"id": number, "name": string}) => (
                            <div className="" key={group.id}>
                                {group.name}
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center gap-5">
                    {
                        hero.superpowers.map((superpower: {"id": number, "name": string}) => (
                            <div className="" key={superpower.id}>
                                {superpower.name}
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center gap-5">
                    {
                        hero.gadgets.map((gadget: {"id": number, "name": string}) => (
                            <div className="" key={gadget.id}>
                                {gadget.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}