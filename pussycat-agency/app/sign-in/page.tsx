import LoginForm from "./sign-in-form"
import HomeButton from "../home-button"

export default function SignIn() {
  return (
    <div
      className="flex flex-wrap flex-col justify-center items-center min-h-screen w-full"
    >
      <HomeButton />
      <LoginForm />
    </div>
  )
}
