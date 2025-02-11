"use client"
//  Previous signin page is for ready made but this page is fully customisable.

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function() {
    const router = useRouter();
    
    return <div className='flex flex-col items-center justify-center h-screen'>

        <h1 className='bg-gray-500 text-white p-2 rounded-md' >SignIn Page</h1>
        <button className='bg-blue-500 text-white p-2 rounded-md' onClick={async () => {
            await signIn("google");
        }}>Login with google</button>


        <br />

        <button className='bg-blue-500 text-white p-2 rounded-md'  onClick={async () => {
            await signIn("github");
        }}>Login with Github</button>
        <br />
        
       <div>
        <div className='flex flex-col '>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        </div> 

        <button className='bg-blue-500 text-white p-2 rounded-md'  onClick={async () => {
            const res = await signIn("credentials", {
                username: "",
                password: "",
                redirect: false,
            });
            console.log(res);
            router.push("/")
        }}>Submit</button>
       </div>

    </div>
}