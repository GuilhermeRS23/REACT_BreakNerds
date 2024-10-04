import { z } from "zod";

export const gameSchema = z.object({
    title: z.string().nonempty({ message: "O título não pode está vazio." })
        .refine((value) => !/^\s*$/.test(value), {
            message: "Digite caracteres válidos"
        }),
    cover: z.string().nonempty({ message: "O link da capa não pode está vazio." })
        .refine((value) => !/^\s*$/.test(value), {
            message: "Digite caracteres válidos"
        }),
    description: z.string().nonempty({ message: "A descrição não pode está vazio." })
        .refine((value) => !/^\s*$/.test(value), {
            message: "Digite caracteres válidos"
        }),
});

export const commentSchema = z.object({
    message: z.string().nonempty({ message: "Campo de comentario não pode está vazio." })
        .refine((value) => !/^\s*$/.test(value), {
            message: "Digite caracteres válidos"
        }),
});
