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
            className="card-hero bg-plum w-[155px] h-[150px] rounded-lg flex flex-col justify-center items-center"
            href={`/dashboard/hero/${index}`}
        >
            <p
                className="text-azure text-2xl"
            >
                {hero.name}
            </p>
        </Link>
    )
}