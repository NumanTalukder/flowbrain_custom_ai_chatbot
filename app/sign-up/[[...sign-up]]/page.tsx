import { SignUp } from "@clerk/nextjs"

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <SignUp appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
  )
}

export default Page
