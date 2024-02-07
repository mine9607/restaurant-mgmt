import { NextAuthOptions, User, getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// Create a new instance of PrismaClient
// PrismaClient is used to interact with the postgres database
const prisma = new PrismaClient();

// Define the authOptions object
// This object is used to configure authentication settings
export const authOptions: NextAuthOptions = {
  // Use the PrismaAdapter with your PrismaClient instance
  // This tells NextAuth.js to use Prisma as your database adapter
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
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
};

export const getAuthSession = () => getServerSession(authOptions);
