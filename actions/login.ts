"use server";

import { revalidatePath,revalidateTag } from "next/cache";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { error } from "console";


// Server actions instead of API Routes

export const login = async(values: z.infer<typeof LoginSchema>) => {
    // validation on server
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields" };
    }
    return { success: "Email sent" };
}