export default defineEventHandler(async (e) => {
  const result = await queryProduct(e);
  if (result) {
    return result;
  } else {
    return createError({ statusCode: 404, statusMessage: "Not found" });
  }
});
