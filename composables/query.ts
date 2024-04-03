import type { QueryBuilderParams } from "@nuxt/content/types";

export const useContentQuery = <T>(key: string, query: Promise<T[]>) => {
  return useAsyncData(key, () => query);
};

export const useProductFieldQuery = (field: keyof Product) => {
  return useContentQuery(field, queryContent("product").only(field).find());
};

export const useLatestProductsQuery = () => {
  return useContentQuery(
    "newProducts",
    queryContent("product").limit(4).sort({ publishedAt: -1 }).find()
  );
};

export const useProductCountQuery = (params: QueryBuilderParams = {}) => {
  return useAsyncData("productCount", () => {
    const initialQuery = queryContent("product");
    if (params.where) {
      // @ts-ignore - possible bug in types (https://github.com/nuxt/content/issues/1522)
      initialQuery.where(params.where);
    }
    if (params.skip) {
      initialQuery.skip(params.skip);
    }
    if (params.limit) {
      initialQuery.limit(params.limit);
    }
    if (params.without) {
      initialQuery.without(params.without);
    }
    if (params.sort) {
      const convertedClause = Array.isArray(params.sort)
        ? params.sort.reduce((acc, sort) => ({ ...acc, ...sort }), {})
        : params.sort;
      initialQuery.sort(convertedClause);
    }
    return initialQuery.count();
  });
};
