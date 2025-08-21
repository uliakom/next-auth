// import GitHub from "next-auth/providers/github"
// import Google from "next-auth/providers/google"

import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";

export default {
  providers:  [
    Credentials({
      async authorize(credentials) {
        // console.log("Credentials received:", credentials);
        
        const validatedFields = LoginSchema.safeParse(credentials);
    

        if (!validatedFields.success) {
          return null;
        }

        const { email, password } = validatedFields.data;

        const user = await getUserByEmail(email) as User | null;
        // console.log("User found:", user);

        if (!user || !user.password) {
          console.log("User not found or no password");
          return null;
        }


        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          console.log("Password doesn't match");
          return null;
        }

        console.log("Authentication successful");
        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
