import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const useS3Client = () => {
  const config = useRuntimeConfig();
  return new S3Client({
    region: "ap-southeast-1",
    credentials: {
      accessKeyId: config.s3AccessKey,
      secretAccessKey: config.s3SecretKey,
    },
  });
};

interface S3Upload {
  folder: "favicon";
  filename: string;
  content: string | Buffer;
  contentType?: string;
}

export const uploadFile = async (upload: S3Upload) => {
  const s3 = useS3Client();
  const cmd = new PutObjectCommand({
    Bucket: "cdn.thunhap.online",
    Key: upload.folder + "/" + upload.filename,
    ACL: "public-read",
    Body: upload.content,
    ContentType: upload.contentType,
  });
  await s3.send(cmd);
  s3.destroy();
  return `https://cdn.thunhap.online/${upload.folder}/${upload.filename}`;
};
