import { getServerSession } from "next-auth";
import { authOptions } from "./config";

export async function getUserSession() {
    return getServerSession(authOptions);
}