export const blobToBase64 = async (blob: Blob): Promise<string> => {
  const buffer = await blob.arrayBuffer();
  return `data:${blob.type};base64,${Buffer.from(buffer).toString("base64")}`;
};
