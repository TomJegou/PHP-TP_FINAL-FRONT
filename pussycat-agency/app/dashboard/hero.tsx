import Link from "next/link"

export default function HeroCard({
    hero,
    index,
}: {
    hero : {
        "name": string,
        "description": string,
    }
    index : number,
}) {
    return (
        <Link
            className="card-hero bg-plum w-[175px] h-[175px] rounded-lg flex flex-col justify-center items-center"
            href={`/dashboard/hero/${index}`}
        >
            <p
                className="text-azure text-2xl flex flex-row justify-center items-center flex-wrap w-full p-4"
            >
                {hero.name}
            </p>
        </Link>
    )
}