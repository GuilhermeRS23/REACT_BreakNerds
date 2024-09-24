import { z } from "zod";

export const searchSchema = z.object({
    title: z.string()
        .nonempty({ message: "Informe algum caractere para pesquisa!" })
        .refine((value) => !/^\s*$/.test(value),
            { message: "Apenas espaço não é aceito para pesquisa!" })
});
