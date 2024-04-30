import { S3Folder, uploadFile } from "~/server/utils/aws";

export default defineEventHandler(async (e) => {
  const data = await readMultipartFormData(e);

  if (!data) {
    return createError({
      status: 400,
      message: "Bad Request",
    });
  }

  const [file, folder] = data;
  return uploadFile({
    folder: folder.data.toString("utf-8") as S3Folder,
    filename: file.filename as string,
    content: file.data,
    contentType: file.type,
  });
});
