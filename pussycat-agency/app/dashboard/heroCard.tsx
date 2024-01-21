import Link from "next/link"

export default function HeroCard({
    hero,
}: {
    hero : {
        "name": string,
        "id": number,
    }
}) {
    return (
        <Link
            className="card-hero bg-plum w-[175px] h-[175px] rounded-lg flex flex-col justify-center items-center"
            href={`/dashboard/hero/${hero.id}`}
        >
            <p
                className="text-azure text-2xl flex flex-row justify-center items-center flex-wrap w-full p-4"
            >
                {hero.name}
            </p>
        </Link>
    )
}