import { db } from "@/lib/db"; 


export const getUserByEmail = async (email: string) => {
 
    try {
        const user = await db.user.findUnique({ where: { email } })
        console.log("User found in DB:", user);
        return user;
    }
    catch (error) {
        console.error("Error in getUserByEmail:", error);
        return null;
    }
    
}

export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({ where: { id } });
        return user;
    }
    catch (error) {
        console.error("Error in getUserById:", error);
        return null;
    }
    
}