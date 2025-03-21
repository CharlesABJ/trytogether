import NextAuth from "next-auth/next";
import { authOptions } from "@/_lib/auth"

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
