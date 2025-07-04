export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return useServerAPI(event).post<{ data: string }>("products", body);
});
