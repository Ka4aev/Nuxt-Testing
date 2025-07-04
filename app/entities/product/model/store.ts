import { getProducts, getProduct, deleteProduct } from "../api";

export const productsQuery = () =>
  useQuery<Product[]>("products", getProducts, {
    onSuccess: (data) => console.log(data),
  });

export const productQuery = (id: number) =>
  useQuery<Product>(`product-${id}`, () => getProduct(id));

export const deleteProductQuery = (id: number) =>
  useQuery("delete-products", () => deleteProduct(id), {
    immediate: false,
    lazy: true,
    getCachedData: () => undefined,
    onSuccess: () => {
      useToast().add({
        title: "Product deleted successfully",
      });
      navigateTo("/");
      clearNuxtData("products");
      clearNuxtData(`product-${id}`);
    },
  });
