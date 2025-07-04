export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  return await useServerAPI(event).delete(`products/${id}`);
});
