import { z } from "zod";

export const Form = z.object({
  name: z
    .string()
    .min(5, "Por favor el valor debe de tener mas de 5 caracteres"),
  author: z
    .string()
    .min(5, "Por favor el valor debe de tener mas de 5 caracteres"),
  category: z
    .string()
    .min(5, "Por favor el valor debe de tener mas de 5 caracteres"),
  description: z
    .string()
    .min(5, "Por favor el valor debe de tener mas de 5 caracteres"),
  seller: z
    .string()
    .min(3, "Por favor el valor debe de tener mas de 5 caracteres"),
  imgUrl: z
    .string()
    .min(5, "Por favor el valor debe de tener mas de 5 caracteres"),
  // tags: z.string().transform((val) => val.replaceAll(" ", "-").split(",")),
  tags: z.string().transform((val) => val.split(",")),
  inStock: z.coerce.number().min(2, "el valor debe de superar los 2 digitos"),
  price: z.coerce.number().min(2, "el valor debe de superar los 2 digitos"),
});

export type FormType = z.infer<typeof Form>;
