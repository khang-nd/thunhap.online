import { uploadFile } from "~/server/utils/aws";

export default defineEventHandler(async (e) => {
  const data = await readMultipartFormData(e);

  if (!data) {
    return createError({
      status: 400,
      message: "Bad Request",
    });
  }

  const [file] = data;
  return uploadFile({
    folder: "product",
    filename: file.filename as string,
    content: file.data,
    contentType: file.type,
  });
});
