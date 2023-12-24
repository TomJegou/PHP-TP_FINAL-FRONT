import Link from "next/link"
import { IoHome } from "react-icons/io5"

export default function HomeButton() {
    return (
        <Link
            href="/"
        >
            <IoHome />
        </Link>
    )
}