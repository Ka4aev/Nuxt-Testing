import { type InferType, object, string } from "yup";

export const createProductSchema = object({
  title: string()
    .min(3, "Минимум 3 символов")
    .max(30, "Максимум 30 символов")
    .required("Поле является обязательным"),
  price: string().matches(/^\d+$/).required("Поле является обязательным"),
  description: string().max(255, "Максимум 255 символов"),
  categoryId: string().required("Поле является обязательным"),
});

export type CreateProductSchema = InferType<typeof createProductSchema>;
