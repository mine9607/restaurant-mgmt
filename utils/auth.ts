import { NextAuthOptions, User, getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// we use this to add the isAdmin property to the user object
declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: Boolean;
    };
  }
}

// we use this to add the isAdmin property to the jwt token
declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: Boolean;
  }
}

// prisma is used to connect to the database
const prisma = new PrismaClient();

// authOptions is used to configure the next-auth library
// we use this to configure the different providers
// we also use this to configure the session and jwt token
export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  debug: true,
};

// this code allows us to get our user and status inside of server components
// we can use this to check if a user is logged in or not on the server
// and we can also use this to get the user's information on the server
export const getAuthSession = () => getServerSession(authOptions);
