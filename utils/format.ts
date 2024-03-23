interface FormatNumberOptions {
  prefix?: string;
  suffix?: string;
  thousand?: string;
}

export function formatPrice(
  value: string | number,
  locale?: "vi" | "en",
  options?: FormatNumberOptions
) {
  const prefix = options?.prefix || (locale === "vi" ? "" : "$");
  const suffix = options?.suffix || (locale === "vi" ? "đ" : "");
  const thousand = options?.thousand || ",";
  const replacedValue = value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, thousand);
  return prefix + replacedValue + suffix;
}
