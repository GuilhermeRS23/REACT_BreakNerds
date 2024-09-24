import { z } from "zod";

export const registerSchema = z.object({
    //Linha de código para tratar nome com letras iniciais em minusculas
    name: z.string().min(3, { message: "Nome dever conter no minímo 3 caracteres." })
        .transform((name) => name.trim().split(" ")
            .map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")),
    email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
    password: z.string().min(6, { message: "Senha deve ter no minimo 6 caracteres." }),
    confirmPassword: z.string().min(6, { message: "Senha deve ter no minimo 6 caracteres." }),
}).refine((data) => data.password === data.confirmPassword,
    {
        message: "Senhas não conferem",
        path: ["confirmPassword"]
    });
