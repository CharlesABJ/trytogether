import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/login",
    }
});

export const config = {
    matcher: ["/", "/dashboard", "/goals", "/meetings", "/messages", "/store", "/profile"]
}