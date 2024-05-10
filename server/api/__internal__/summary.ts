import { serverQueryContent } from "#content/server";
import {
  GenerativeServiceClient,
  ModelServiceClient,
} from "@google-ai/generativelanguage";
import { toString } from "mdast-util-to-string";

export default defineEventHandler(async (e) => {
  const { url, platform } = getQuery<{
    url: string;
    platform: "Facebook" | "Twitter";
  }>(e);
  const { pathname } = new URL(url);
  const fallback = [, "en", pathname];
  const [, locale, path] = /\/(.*)?(\/product.+)/.exec(pathname) || fallback;
  const product = await serverQueryContent(e)
    .where({ _path: path, _locale: locale })
    .findOne();

  if (!product) {
    return createError({ status: 404, message: "Product not found" });
  }

  const genClient = new GenerativeServiceClient();
  const modelClient = new ModelServiceClient();
  const prompt = [
    `Summarize:`,
    toString(product.body),
    `(title: ${product.title},`,
    `revenue: ${product.revenue}/month)`,
  ].join(" ");
  // return { prompt };
  const models = await modelClient.listTunedModels();
  const model = models[0].find(
    (m) => m.displayName === (platform === "Facebook" ? "tno-fb" : "tno-x")
  );

  if (!model) {
    return createError({ status: 404, message: "Tuned model not found" });
  }

  const result = await genClient.generateContent({
    model: model.name,
    contents: [{ parts: [{ text: prompt }] }],
  });
  // return result;
  return result?.[0].candidates?.[0].content;
});
