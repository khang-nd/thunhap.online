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
