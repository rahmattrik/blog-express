import { hashPassword } from "@/lib/bcrypt";
import prisma from "@/prisma";
import { User } from "@prisma/client";

export const registerService = async (
    body: Pick<User, "email" | "fullName" | "password">
) => {
    try {
        const { email, password } = body;
        const existingUser = await prisma.user.findFirst({
            where: { email },
        });

        if (existingUser) {
            throw new Error("email already exist");
        }

        const hasedPassword = await hashPassword(password);
        return await prisma.user.create({
            data: { ...body, password: hasedPassword },
        });

    } catch (error) {
        throw error;
    }
}