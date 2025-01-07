import { NextRequest, NextResponse } from "next/server";
import client from "@/db"

// here get function is using Better fetcheds, means here is written for the formality for me to understand the code, actually we are not using this GET request in our app/page.tsx

// we are directly calling the prisma client in the app/page.tsx
export async function GET() {
    const user = await client.user.findFirst();
    return Response.json({ 
        username: user?.username, password: user?.password
    })
  }

  // above get request is no longer needed because we are not using it in our app/page.tsx
  // we are directly calling 
  // but we are using the POST request below


  // This below function goes insdie Sever Actions.

export async function POST(req: NextRequest) {
    const body = await req.json();
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });
    console.log(user.id);
    return NextResponse.json({ message: "Signed up" });
}