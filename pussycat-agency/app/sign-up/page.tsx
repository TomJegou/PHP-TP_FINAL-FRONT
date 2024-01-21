import SignUpForm from "./sign-up-form"
import HomeButton from "../home-button"

export default function SignUp() {
    return (
        <div
            className="flex flex-wrap flex-col justify-center items-center min-h-screen w-full"
        >
            <HomeButton />
            <SignUpForm />
        </div>
    )
}