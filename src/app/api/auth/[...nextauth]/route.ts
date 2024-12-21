import { authOptions } from "@/libs/authOptions";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions as NextAuthOptions);

export { handler as GET, handler as POST };
