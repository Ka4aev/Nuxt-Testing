export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const data = await useServerAPI(event).get<Promise<any>>(`products/${id}`);

  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    price: data.price,
    description: data.description,
    category: data.category,
    images: data.images,
  } as Product;
});
