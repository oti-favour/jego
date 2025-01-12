import { uuid } from "@sanity/uuid";
import NextAuth from "next-auth";
import Credential from "next-auth/providers/credentials";
import { client } from "./sanity/lib/client";
import { GetPassword } from "./utils/queries/queries";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  providers: [
    Credential({
      credentials: {
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const pinCode = await client.fetch<string>(GetPassword);

        if (credentials.password !== pinCode) {
          console.log(pinCode)
          
          return;
        }
        if (credentials.password === pinCode) {
          console.log("correct password", credentials.password, pinCode);

          return {
            id: uuid(),
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET, // Add the secret here
});
