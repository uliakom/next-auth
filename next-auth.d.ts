import NextAuth ,{ type DefaultSession }  from "next-auth";
import { UserRole } from "@prisma/client";

export type ExtendedUser = {
    role: UserRole;
    // customField?: string;
} & DefaultSession["user"];

declare module "next-auth" {
 
  interface Session {
    user: ExtendedUser;
  }
}