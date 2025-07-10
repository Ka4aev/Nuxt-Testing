import { type InferType, object, string, array } from "yup";

export const createProductSchema = object({
  title: string()
    .min(3, "Минимум 3 символов")
    .max(30, "Максимум 30 символов")
    .required("Поле является обязательным"),
  price: string()
    .matches(/^\d+$/, "Поле должно быть числом")
    .required("Поле является обязательным"),
  description: string().max(255, "Максимум 255 символов"),
  categoryId: string().required("Поле является обязательным"),
  images: array()
    .of(string().required().url("Должна быть валидная ссылка"))
    .min(1, "Добавьте хотя бы одно изображение")
    .required("Добавьте изображения"),
});

export type CreateProductSchema = InferType<typeof createProductSchema>;
