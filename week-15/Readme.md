
# Next.js Notes

## Pre-requisites

Before diving into Next.js, ensure you:

-   Understand basic Frontend development.
-   Have knowledge of React and can create a simple application using it.

----------

## Why Next.js?

Next.js was introduced to address some limitations of React, including:

1.  **Separate Backend Project**: React requires a separate backend project for API routes.
2.  **Routing**: React does not provide built-in routing (requires `react-router-dom`).
3.  **SEO Optimization**: React is not inherently SEO-optimized due to client-side rendering limitations.
    -   Modern React uses Server Components to address this.
4.  **Waterfalling Problem**: Sequential data fetching leads to inefficient loading.

----------

## Setting Up the Project

1.  Bootstrap the project:
    
    ```bash
    npx create-next-app@latest
    
    ```
    
2.  Clean up the default setup:
    -   Remove all content from `app/page.tsx`.
    -   Clear CSS in `global.css` (keep Tailwind headers).
3.  Run the app:
    
    ```bash
    npm run dev
    
    ```
    

----------

## Project File Structure

```
next.config.mjs    # Next.js configuration file
tailwind.config.js # Tailwind configuration file
app/               # Contains routes, layouts, and components
components/        # Reusable components

```

----------

## Key Features of Next.js

1.  **Server-Side Rendering (SSR)**: Resolves SEO issues.
2.  **API Routes**: Single codebase for frontend and backend.
3.  **File-Based Routing**: No need for third-party libraries like `react-router-dom`.
4.  **Static Site Generation (SSG)**: Optimizes bundle size.
5.  **Vercel Maintenance**: Actively maintained by the Vercel team.

### Downsides of Next.js

-   Requires a server for SSR, which can be expensive.
-   Very opinionated, making it challenging to migrate out.

----------

## Understanding Rendering Strategies

### Client-Side Rendering (CSR)

-   Default rendering strategy in Next.js for all pages.
-   Best suited for:
    -   Non-SEO-critical pages.
    -   Pages not requiring quick load times.
    -   Content for users with fast devices and internet.

### Server-Side Rendering (SSR)

-   Solves SEO problems by rendering HTML on the server.
-   When a crawler like Googlebot visits a page, it receives fully rendered HTML.
-   Example:
    
    ```bash
    npm run dev
    
    ```
    
    -   Visit `http://localhost:3000/signup` to view the server-rendered HTML response.

----------

## Next.js Features

### File-Based Routing

In Next.js, the folder structure dictates routes:

-   Create a folder `app/signup`.
-   Add a `page.tsx` file inside it.
-   Run the app with `npm run dev`.
-   Access the route at `http://localhost:3000/signup`.

**Assignment:** Create a new `signin` route following the same structure.

### Components Directory

-   Store reusable components in a `components` directory.
-   Example structure:
    
    ```
    components/Signin.tsx
    app/(auth)/signin/page.tsx
    
    ```
    
    **Code:**
    
    ```tsx
    // components/Signin.tsx
    "use client";
    
    export function Signin() {
        return (
            <div className="h-screen flex justify-center flex-col">
                <div className="flex justify-center">
                    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                        <div>
                            <div className="px-10">
                                <div className="text-3xl font-extrabold">Sign in</div>
                            </div>
                            <div className="pt-2">
                                <LabelledInput label="Username" placeholder="email@example.com" />
                                <LabelledInput label="Password" type="password" placeholder="******" />
                                <button type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">Sign in</button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
    
    interface LabelledInputType {
        label: string;
        placeholder: string;
        type?: string;
    }
    
    function LabelledInput({ label, placeholder, type }: LabelledInputType) {
        return (
            <div>
                <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
                <input type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5" placeholder={placeholder} required />
            </div>
        );
    }
    
    ```
    
    Use this component in `app/(auth)/signin/page.tsx`:
    
    ```tsx
    import { Signin as SigninComponent } from '@/components/Signin';
    
    export default function Signin() {
        return <SigninComponent />;
    }
    
    ```
    

### Layouts

-   `layout.tsx` wraps child pages with common logic or components.
-   Example: Add an Appbar or Banner.

**Code:**

```tsx
// app/(auth)/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-gray-800 text-white p-4 text-center font-bold">
                Login now to get 20% off!
            </header>
            <main>{children}</main>
        </div>
    );
}

```

### Merging Routes

1.  Create an `auth` folder with `layout.tsx`.
2.  Place `signup` and `signin` routes under the `auth` folder:
    -   `/auth/signup`
    -   `/auth/signin`

Alternative: Use a folder with `()` to group routes without affecting URLs.

----------

###  Add a Button onClick Handler

Now try adding an `onClick` handler to the button on the signin page:

```tsx
<button onClick={() => {
    console.log("User clicked on signin");
}} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>

```

You will notice an error when you open the page:

-   This happens because Next.js, by default, treats all components as **server components**.

----------

###  Client and Server Components

Ref: [Next.js Documentation](https://nextjs.org/learn/react-foundations/server-and-client-components)

Next.js expects you to identify all your components as either **client** or **server**:

1.  **Server Components**: Rendered on the server.
2.  **Client Components**: Pre-rendered and sent to the client to be rendered again.

### Default Behavior

By default, all components are server components. To mark a component as a client component, add the following to the top of the file:

```tsx
"use client";

```

### When to Create Client Components?

-   When you encounter errors indicating a need for a client component.
-   When using client-specific logic like `useEffect`, `useState`, or `onClick`.

**Rule of Thumb**: Defer client-side rendering as much as possible.

**Assignment:**

-   Update `components/Signin.tsx` to make it a client component.
-   Verify that the error disappears.

----------

## Assignments

1.  Add a `signin` route.
2.  Create a layout for `/signin` routes.
3.  Merge `signup` and `signin` routes under `/auth`.
4.  Prettify the `signin` page with a better design.
5.  Update `Signin.tsx` to use client components.

----------

## **Backend in Next.js**

This section focuses on transitioning from frontend/client-side rendering to backend/server-side rendering in Next.js. Below are the steps for implementing and enhancing backend functionalities.

----------

### **Step 1: Recap of Data Fetching in React**

Before diving into the backend, let’s recap how data fetching works in React:

-   We’re not building the backend yet.
-   Assume the backend route: `https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details`.
-   Example implementation:
    -   A user card website fetches and displays the user’s name and email using the provided backend endpoint.

----------

### **Step 2: Data Fetching in Next.js**

Reference: [Next.js Data Fetching Docs](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)

-   You can fetch data in Next.js similarly to React, but it’s better to leverage **Server-Side Rendering (SSR)** for performance and SEO benefits.
-   Example:
    -   Fetch user details on the server and pre-render the page.

#### Implementation:

1.  Initialize an empty Next.js project:
    
    ```bash
    npx create-next-app@latest
    
    ```
    
2.  Install `axios`:
    
    ```bash
    npm i axios
    
    ```
    
3.  Write a function to fetch user details and render them in the root page.

```tsx
import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>
          <div>Email: {userData?.email}</div>
        </div>
      </div>
    </div>
  );
}

```

#### Question: Do we need a loader for slower responses?

----------

### **Step 3: Adding Loaders in Next.js**

For handling delays in data fetching, create a `loading.tsx` file:

```tsx
export default function Loading() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">Loading...</div>
    </div>
  );
}

```

----------

### **Step 4: API Routes in Next.js**

-   Next.js allows creating backend routes similar to Express.js.
-   Benefits:
    -   Unified codebase for frontend and backend.
    -   No CORS issues with a single domain.
    -   Easier deployment.

#### Implementation:

1.  Create a folder structure for the API route:
    
    ```
    /app/api/user/route.ts
    
    ```
    
2.  Add a GET route to return hardcoded user details:
    
    ```tsx
    export async function GET() {
      return Response.json({ username: "harkirat", email: "harkirat@gmail.com" });
    }
    
    ```
    
3.  Update `getUserDetails` to call the new route:
    
    ```tsx
    async function getUserDetails() {
      try {
        const response = await axios.get("http://localhost:3000/api/user");
        return response.data;
      } catch (e) {
        console.error(e);
      }
    }
    
    ```
    

----------

### **Step 5: Frontend for Signup**

1.  Create a signup page and component:
    
    -   **Page:** `/app/signup/page.tsx`
    -   **Component:** `/components/Signup.tsx`
2.  Signup component code:
    
    ```tsx
    "use client";
    
    import axios from "axios";
    import { ChangeEventHandler, useState } from "react";
    
    export function Signup() {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
    
      return (
        <div className="h-screen flex justify-center flex-col">
          <div className="flex justify-center">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              <div className="px-10">
                <h2 className="text-3xl font-extrabold">Sign up</h2>
              </div>
              <div className="pt-2">
                <LabelledInput
                  label="Username"
                  placeholder="harkirat@gmail.com"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <LabelledInput
                  label="Password"
                  type="password"
                  placeholder="123456"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  onClick={async () => {
                    const response = await axios.post("http://localhost:3000/api/user", {
                      username,
                      password,
                    });
                    console.log(response);
                  }}
                  className="mt-8 w-full text-white bg-gray-800 rounded-lg px-5 py-2.5"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    function LabelledInput({ label, placeholder, type = "text", onChange }) {
      return (
        <div>
          <label className="block mb-2 text-sm font-semibold">{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className="bg-gray-50 border text-gray-900 rounded-lg p-2.5 w-full"
          />
        </div>
      );
    }
    
    ```
    
3.  Use `useRouter` to navigate upon successful signup:
    
    ```tsx
    import { useRouter } from "next/router";
    
    const router = useRouter();
    
    const handleSignup = async () => {
      const response = await axios.post("http://localhost:3000/api/user", { username, password });
      router.push("/");
    };
    
    ```
  ____
**Step 6 - Moving the Backend into Our App**

To enhance our application, we'll introduce a backend route that returns hardcoded values for a user’s details, such as email, name, and ID.

1.  **Create a Folder Structure**:
    
    -   Add a new folder named `api`.
    -   Inside `api`, add another folder called `user`.
    -   Create a file named `route.ts` inside the `user` folder.
2.  **Initialize a GET Route**: In `route.ts`, add a GET route that returns hardcoded user details:
    
    ```typescript
    import { NextRequest, NextResponse } from 'next/server';
    
    export async function GET() {
        return NextResponse.json({ username: "harkirat", email: "harkirat@gmail.com", id: 1 });
    }
    
    ```
    

**Step 7 - Frontend for Signing Up**

We’ll create a simple signup page with a form to collect user details.

1.  **Create `app/signup/page.tsx`**:
    
    -   Import the Signup component and render it:
    
    ```typescript
    import { Signup } from "@/components/Signup";
    
    export default function SignupPage() {
        return <Signup />;
    }
    
    ```
    
2.  **Create `components/Signup.tsx`**:
    
    -   Implement the Signup component:
    
    ```typescript
    "use client";
    
    import axios from "axios";
    import { ChangeEventHandler, useState } from "react";
    import { useRouter } from "next/router";
    
    export function Signup() {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const router = useRouter();
    
        return (
            <div className="h-screen flex justify-center flex-col">
                <div className="flex justify-center">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                        <div className="px-10">
                            <div className="text-3xl font-extrabold">Sign up</div>
                        </div>
                        <div className="pt-2">
                            <LabelledInput label="Username" placeholder="harkirat@gmail.com" onChange={(e) => setUsername(e.target.value)} />
                            <LabelledInput label="Password" type="password" placeholder="123456" onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={async () => {
                                const response = await axios.post("http://localhost:3000/api/user", { username, password });
                                router.push("/");
                            }}
                            className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
        return (
            <div>
                <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
                <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
            </div>
        );
    }
    
    interface LabelledInputType {
        label: string;
        placeholder: string;
        type?: string;
        onChange: ChangeEventHandler<HTMLInputElement>;
    }
    
    ```
    

**Step 8 - Backend for Signing Up**

We'll introduce a POST route that handles user signup by accepting an email and password, and for now, returns them back.

1.  **Add a POST Endpoint**:
    
    -   In `app/api/user/route.ts`, initialize a POST endpoint:
    
    ```typescript
    import { NextRequest, NextResponse } from 'next/server';
    
    export async function POST(req: NextRequest) {
        const body = await req.json();
        return NextResponse.json({ username: body.username, password: body.password });
    }
    
    ```
    

**Step 9 - Databases**

To persist data, we will integrate a database using Prisma with a free PostgreSQL database from services like Neon or Aiven.

1.  **Install Prisma**:
    
    ```bash
    npm install prisma
    
    ```
    
2.  **Initialize Prisma Schema**:
    
    ```bash
    npx prisma init
    
    ```
    
3.  **Create a User Schema**:
    
    -   In the `prisma/schema.prisma` file, define a simple user model:
    
    ```prisma
    model User {
      id        Int     @id @default(autoincrement())
      username  String  @unique
      password  String
    }
    
    ```
    
4.  **Replace `.env` with Your Postgres URL**:
    
    ```env
    DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
    
    ```
    
5.  **Migrate the Database**:
    
    ```bash
    npx prisma migrate dev --name init_schema
    
    ```
    
6.  **Generate the Client**:
    
    ```bash
    npx prisma generate
    
    ```
    
7.  **Complete the Signup Route**: Update the POST route to store user details in the database:
    
    ```typescript
    import { NextRequest, NextResponse } from 'next/server';
    import client from '@/db';
    
    export async function POST(req: NextRequest) {
        const body = await req.json();
        const user = await client.user.create({
            data: {
                username: body.username,
                password: body.password,
            },
        });
    
        return NextResponse.json({ message: "Signed up", userId: user.id });
    }
    
    ```
    
8.  **Update the GET Endpoint**: Retrieve the first user from the database:
    
    ```typescript
    export async function GET() {
        const user = await client.user.findFirst({});
        return NextResponse.json({ name: user?.username, email: user?.username });
    }
    
    ```
    

**Step 10 - Better Fetches**

Instead of making HTTP requests from the server to itself, we’ll use Prisma directly in our server-side functions. This approach eliminates the overhead of HTTP requests and provides direct access to the database, making data fetching more efficient and reducing latency.

1.  **Current Solution**:
    
    ```typescript
    import axios from "axios";
    
    async function getUserDetails() {
        try {
            const response = await axios.get("http://localhost:3000/api/user");
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    
    ```
    
2.  **Better Solution**:
    
    -   Use Prisma to fetch user details directly:
    
    ```typescript
    import { PrismaClient } from "@prisma/client";
    
    const client = new PrismaClient();
    
    async function getUserDetails() {
        try {
            const user = await client.user.findFirst({});
            return { name: user?.username, email: user?.username };
        } catch (e) {
            console.log(e);
        }
    }
    
    ```
    

**Step 11 - Singleton Prisma Client**

To manage the Prisma client efficiently, we'll create a singleton instance to avoid multiple instances in development.

1.  **Create `db/index.ts`**:
    
    -   Add a Prisma client singleton inside it:
    
    ```typescript
    import { PrismaClient } from '@prisma/client';
    
    const prismaClientSingleton = () => {
        return new PrismaClient();
    };
    
    declare global {
        var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
    }
    
    const prisma = globalThis.prisma ?? prismaClientSingleton();
    
    export default prisma;
    
    if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
    
    ```
    
2.  **Update Imports of Prisma Everywhere**:
    
    -   Import the client from `@/db`.
    
    ```typescript
    import client from "@/db";
    
    ```
    

**Step 12 - Server Actions**

Server actions in Next.js allow you to perform server-side operations seamlessly, similar to RPC (Remote Procedure Call).

1.  **Current API Endpoint**:
    
    -   A typical API endpoint for user signup:
    
    ```typescript
    import { NextRequest, NextResponse } from 'next/server';
    import client from '@/db';
    
    export async function POST(req: NextRequest) {
        const body = await req.json();
        const user = await client.user.create({
            data: {
                username: body.username,
                password: body.password,
            },
        });
    
        return NextResponse.json({ message: "Signed up" });
    }
    
    ```
    
2.  **Implementing Server Actions**:
    
    -   Write a function to handle signup directly:
    
    ```typescript
    "use server";
    
    import client from "@/db";
    
    export async function signup(username: string, password: string) {
        const user = await client.user.create({
            data: {
                username: username,
                password: password,
            },
        });
    
        return "Signed up!";
    }
    
    ```
    
3.  **Update `Signup.tsx`**:
    
    -   Use the server action in the signup process:
    
    ```typescript
    import { signup } from "@/actions/user";
    import { useRouter } from "next/router";
    import { ChangeEventHandler, useState } from "react";
    
    export function Signup() {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const router = useRouter();
    
        return (
            <div className="h-screen flex justify-center flex-col">
                <div className="flex justify-center">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                        <div className="px-10">
                            <div className="text-3xl font-extrabold">Sign up</div>
                        </div>
                        <div className="pt-2">
                            <LabelledInput label="Username" placeholder="harkirat@gmail.com" onChange={(e) => setUsername(e.target.value)} />
                            <LabelledInput label="Password" type="password" placeholder="123456" onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={async () => {
                                const response = await signup(username, password);
                                localStorage.setItem("token", response);
                                router.push("/");
                            }}
                            className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    ```
    
4.  **Benefits of Server Actions**:
    
    -   Single function usable in both client and server components.
    -   Provides types for the function response on the frontend (similar to tRPC).
    -   Seamless integration with forms.

For more information, refer to the Next.js documentation on [Server Actions and Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).

[Better Reference-1](https://projects.100xdevs.com/tracks/nextjs-1)
[Better Reference-2](https://projects.100xdevs.com/tracks/nextjs-2)

