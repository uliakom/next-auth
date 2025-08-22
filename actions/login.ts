"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

// Server actions instead of API Routes

export const login = async (values: z.infer<typeof LoginSchema>) => {
  // validation on server
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo:DEFAULT_LOGIN_REDIRECT,
    });

    return { error: undefined, success: "You are logged in" };
    
  } catch (error) {
      if (error instanceof AuthError) {
          switch (error.type) {
              case "CredentialsSignin":
                  return { error: "Invalid credentials",success: undefined }
              default: 
                  return {error: "Something went wrong",success: undefined}
          }
      }
      throw error;
  }
};
