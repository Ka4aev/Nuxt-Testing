import type { FormSubmitEvent } from "@nuxt/ui";
import type { CreateProductSchema } from "../lib";
import { createProduct } from "../api";

export const useStore = () => {
  const state = reactive<CreateProductSchema>({
    title: "",
    price: "",
    images: [],
    categoryId: "",
    description: "",
  });
  const toast = useToast();

  const onSubmit = async ({ data }: FormSubmitEvent<CreateProductSchema>) => {
    try {
      await createProduct(data);
      toast.add({
        title: "Success",
        description: "The form has been submitted.",
        color: "success",
      });
      navigateTo("/");
    } catch (error: any) {
      toast.add({
        title: "Error",
        description: error.data.data.message || error.data.message,
        color: "error",
      });
    }
  };

  return {
    state,
    onSubmit,
  };
};
