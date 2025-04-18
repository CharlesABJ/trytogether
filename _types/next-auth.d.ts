import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      firstName?: string;
      lastName?: string;
      name?: string;
    };
  }

  interface User {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    name?: string;
  }

  interface JWT {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    name?: string;
  }
}