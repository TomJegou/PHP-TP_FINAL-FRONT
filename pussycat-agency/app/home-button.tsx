import Link from "next/link"
import { IoHome } from "react-icons/io5"

export default function HomeButton() {
    return (
        <Link
            href="/"
            className="button absolute top-2 left-2"
        >
            <IoHome color={"#d68fd6"} size={50} />
        </Link>
    )
}