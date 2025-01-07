import client from "@/db"

// using Better Fetches , means we are not using GET request of route.ts
// anymore. Hum yahi pe prisma client ko call kar rahe hain

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
	  return {
      username: user?.username,
      password: user?.password
    }
  }  catch(e){
    console.error(e);
  }
}

export default async function Home() {
    const userData = await getUserDetails();

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="border p-8 rounded">
                    <div>
                        Username : {userData?.username }
                    </div>
                    <div>
                        Password : { userData?.password }
                    </div>

                </div>
            </div>
        </div>
    );
}
