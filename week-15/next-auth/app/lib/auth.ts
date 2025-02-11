import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


export const NEXT_AUTH_CONFIG = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: 'email', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },
          },
          async authorize(credentials: any) {
              return {
                  id: "user1",
                  name: "asd",
                  userId: "asd",
                  email: "ramdomEmail"
              };
          },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.CLIENT_SECRET || ""
          }), 
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
          })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        // jwt: async ({ user, token }: any) => {
        // if (user) {
        //     token.uid = user.id;
        // }
        // return token;
        // },
      session: ({ session, token, user }: any) => {
          if (session.user) {
              session.user.id = token.uid
          }
          return session
      }
    },
    pages: {
        signIn: "/api/signin"
    }
  }

  /*
   pages: {
        signIn: "/signin"
    }  
        it means that the signin page is in the /signin folder.
        if you want to change the signin page to a custom page, you can do it by changing the signIn property to the path of the custom page.
        if you remove this then it will use the default signin page.
  */
