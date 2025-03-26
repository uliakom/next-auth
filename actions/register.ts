"use server";

import { revalidatePath,revalidateTag } from "next/cache";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { error } from "console";


// Server actions instead of API Routes

export const register = async(values: z.infer<typeof RegisterSchema>) => {
    // validation on server
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }
    return { success: "Email sent" };
}