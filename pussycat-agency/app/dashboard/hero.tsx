import Link from "next/link"

export default function Hero({
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
            className="bg-plum w-[310px] h-[300px] rounded-lg flex flex-col justify-center items-center"
            href={`/dashboard/hero/${index}`}
        >
            <p>{hero.name}</p>
        </Link>
    )
}