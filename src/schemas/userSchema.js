import { z } from "zod";

export const userSchema = z.object({
    name: z.string().nonempty({ message: "O nome não pode está vazio." })
        .refine((value) => !/^\s*$/.test(value), {
            message: "Digite caracteres válidos"
        }),
    avatar: z.string().nonempty({ message: "O link da foto não pode está vazio." })
        .refine((value) => !/^\s*$/.test(value), {
            message: "Digite caracteres válidos"
        }),
    background: z.string().nonempty({ message: "Link do background não pode está vazio." })
        .refine((value) => !/^\s*$/.test(value), {
            message: "Digite caracteres válidos"
        }),
});
