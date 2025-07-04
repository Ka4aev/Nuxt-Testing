export default defineEventHandler(async (event) => {
  const result = await useServerAPI(event).get<any[]>("products");

  return result.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    price: item.price,
    description: item.description,
    category: item.category,
    images: item.images,
  })) as Product[];
});
