import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Credentials({
            type: "credentials",
            name: "Credentials",
            credentials: {
                id: { label: "id" },
                token: { label: "token" },
                email: { label: "email" },
                name: { label: "name" },
            },
            async authorize(credentials) {
                const user: any = credentials as any;
                if (user) {
                    return user;
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile, user }: any) {
            if (account?.provider === "credentials") {
                token = {
                    ...user,
                };
            }
            return token;
        },

        async session({ session, token }: any) {
            session.user = { ...token };
            return session;
        },
    },
    pages: {
        signIn: "/auth/login",
    },
};
