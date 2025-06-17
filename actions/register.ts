"use server";

import { revalidatePath,revalidateTag } from "next/cache";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { error } from "console";
import bcrypt from "bcrypt"
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

// Server actions instead of API Routes

export const register = async(values: z.infer<typeof RegisterSchema>) => {
    // validation on server
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already exist.Please choose other one" };
    }

    await db.user.create({
        data: {
            name,
            email,
            password:hashedPassword
        }
    })

    // TO DO : Send  Verification token

        
    return { success: "User created" };
}