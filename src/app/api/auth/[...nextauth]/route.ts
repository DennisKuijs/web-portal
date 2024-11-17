import { createUser, userExists } from "@/app/actions/actions";
import NextAuth from "next-auth";
import SteamProvider, { PROVIDER_ID } from 'next-auth-steam';
import type { NextRequest } from "next/server";

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

                    let user : any[] = await userExists(profile?.steamid as string);
                    
                    if(user) {
                        user = await createUser(profile);
                    }

                    // token.user = user;

                }
                return token;
            },
            session({ session, token }) {
                if (token.user) {
                    // @ts-expect-error
                    session.user.steam = token.user;
                }
                return session
            }
        }
    })
}

export { handler as GET, handler as POST }