import Link from "next/link"

export default function Home() {
    return(
        <main className="flex flex-wrap flex-col justify-center items-center gap-[10vh]">
            <h1
                className="home-title text-aquamarine text-7xl"
            >
                PUSSYCAT AGENCY
            </h1>
            <div
                className="button bg-plum w-[120px] h-[50px] rounded-md flex flex-col flex-wrap justify-center items-center border-[3px]"
            >
                <Link
                    href="/sign-in"
                    className="text-azure text-2xl w-full h-full flex flex-col flex-wrap justify-center items-center"
                >
                        Sign in
                </Link>
            </div>
        </main>
    )
}