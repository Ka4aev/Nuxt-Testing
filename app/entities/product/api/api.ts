export const getProducts = () => $fetch("/bff/products");

export const getProduct = (id: number) => $fetch(`/bff/product/${id}`);

export const deleteProduct = (id: number) =>
  $fetch(`/bff/product/${id}`, {
    method: "DELETE",
  });

export const getProductCategories = () => $fetch("/bff/product/categories");
