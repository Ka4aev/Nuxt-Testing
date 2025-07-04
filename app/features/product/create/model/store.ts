import type { FormSubmitEvent } from "@nuxt/ui";
import type { CreateProductSchema } from "../lib";
import { createProduct } from "../api";

export const useStore = () => {
  const state = reactive<Partial<CreateProductSchema>>({});
  const toast = useToast();

  const onSubmit = async ({ data }: FormSubmitEvent<CreateProductSchema>) => {
    try {
      await createProduct(data);
      toast.add({
        title: "Success",
        description: "The form has been submitted.",
        color: "success",
      });
    } catch {
      toast.add({
        title: "Error",
        description: "The form not has been submitted.",
        color: "error",
      });
    }
  };

  return {
    state,
    onSubmit,
  };
};
