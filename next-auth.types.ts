import type { DefaultSession } from "next-auth";
import { decl } from "postcss";

declare module "next-auth" {
    interface Session {
        user: DefaultSession['user'] & {
            id: string
        }
    }
}