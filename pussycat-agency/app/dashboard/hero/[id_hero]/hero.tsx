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
    }
}) {
    return (
        <div className="flex flex-col flex-wrap justify-center items-center">
            <div>{hero.name}</div>
        </div>
    )
}