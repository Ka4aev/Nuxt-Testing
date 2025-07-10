export default defineEventHandler(async (event) => {
  const result = await useServerAPI(event).get<any[]>("categories");

  return result.map((item) => ({
    id: item.id,
    name: item.string,
    slug: item.slug,
    image: item.image,
  })) as Category[];
});
