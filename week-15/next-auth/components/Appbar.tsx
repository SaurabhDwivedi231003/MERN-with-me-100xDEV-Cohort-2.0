
"use client";
// import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react"

export const Appbar = () => {
    // const router = useRouter();
    // return <div>
    //     <button className="" onClick={()=>{
    //         router.push("api/auth/signin")
    //     }}>SignIn</button>
    // </div>

    const session = useSession();
    return <div>
    <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => signIn()}>Signin</button>
    <button className="bg-red-500 text-white p-2 rounded-md" onClick={() => signOut()}>Signout</button>
    <p>{JSON.stringify(session)}</p>
  </div>

}