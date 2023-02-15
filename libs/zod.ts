import { z } from "zod";
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

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
  // tags: z.string().transform((val) => val.replaceAll(" ", "-").split(",")),
  tags: z
    .string()
    .transform((val) =>
      val.split(",").map((v) => v.trim().replaceAll(" ", "-"))
    ),
  inStock: z.coerce.number().min(2, "el valor debe de superar los 2 digitos"),
  price: z.coerce.number().min(2, "el valor debe de superar los 2 digitos"),
  imgUrl: z.any(),
  // .refine(
  //   (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
  //   "Only .jpg, .jpeg, .png and .webp formats are supported."
  // ),
});

export type FormType = z.infer<typeof Form>;
