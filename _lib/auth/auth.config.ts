import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/_lib/db/prisma";
import { authBaseConfig } from "./auth.base.config";

export const authConfig = {
    ...authBaseConfig,
    adapter: PrismaAdapter(prisma),
}
