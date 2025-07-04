import type { CreateProductSchema } from "../lib";

export const createProduct = (body: CreateProductSchema) =>
  $fetch(`/bff/product`, {
    method: "POST",
    body,
  });
