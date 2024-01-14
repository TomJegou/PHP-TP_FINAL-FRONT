import Link from "next/link"

export default function Home() {
    return(
        <div className="flex flex-wrap flex-col justify-center items-center gap-[10vh]">
            <h1
                className="home-title text-aquamarine text-7xl mt-64"
            >
                PUSSYCAT AGENCY
            </h1>
            <div className="flex flex-col flex-wrap justify-center items-center gap-3">
                <div
                    className="button bg-plum p-4 h-[50px] rounded-md flex flex-col flex-wrap justify-center items-center border-[3px]"
                >
                    <Link
                        href="/sign-in"
                        className="text-azure text-2xl w-full h-full flex flex-col flex-wrap justify-center items-center"
                    >
                            se connecter
                    </Link>
                </div>
                <Link
                    href="/sign-up"
                    className="text-dark text-lg w-full h-full flex flex-col flex-wrap justify-center items-center hover:underline"
                >
                        s'enregister
                </Link>
            </div>
        </div>
    )
}