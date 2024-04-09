import { serverQueryContent } from "#content/server";
import { EventHandlerRequest, H3Event } from "h3";

const ignoreFields = [
  "body",
  "_dir",
  "_draft",
  "_partial",
  "_type",
  "_id",
  "_source",
  "_file",
  "_extension",
];

const mandateFields = ["title", "description", "image", "_path", "_locale"];

export const queryProduct = (e: H3Event<EventHandlerRequest>) => {
  const query = getQuery(e);
  const slug = getRouterParam(e, "slug");
  const content = serverQueryContent(e).where({ _dir: "product" });

  if (slug) {
    content.where({ _path: { $icontains: slug } });
  }

  if (!query.details) {
    content.only(mandateFields);
  }

  if (query.locale && ["en", "vi"].includes(query.locale as string)) {
    content.locale(query.locale as string);
  }

  content.without(ignoreFields);

  return slug ? content.findOne() : content.find();
};
