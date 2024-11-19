import { createUser, userExists } from "@/app/actions/actions";
import NextAuth, { DefaultSession } from "next-auth";
import SteamProvider, { PROVIDER_ID } from 'next-auth-steam';
import type { NextRequest } from "next/server";

export type Profile = {
    steamId: String,
    userName: String,
    profileurl: String,
    avatar: String,
    balance: Number,
    email: String,
    tradeUrl: String,
    createdAt: Number,
    updatedAt: Number
}

export type User = {
    id: String,
    profile: Number
} & DefaultSession["user"];

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: User;
    }
}

async function handler(req: NextRequest, ctx: { params: { nextauth: string[] }}) {
    return NextAuth(req, ctx, {
        secret: process.env.NEXTAUTH_SECRET,
        providers: [
            SteamProvider(req, {
                clientSecret: process.env.STEAM_CLIENT_SECRET!,
                callbackUrl: `${process.env.NEXTAUTH_URL}/api/auth/callback`
            })
        ],
        callbacks: {
            async jwt({ token, account, profile }) {
                if(account?.provider === PROVIDER_ID) {

                    const userId = token.sub as string;
                    token.profile = await userExists(userId);

                    if (token.profile.length == 0) {
                        token.profile = await createUser(profile)
                    }
                }
                return token;
            },
            session({ session, token }) {
                session.user.profile = token;
                return session
            }
        }
    })
}

export { handler as GET, handler as POST }