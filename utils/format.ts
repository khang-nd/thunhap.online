interface FormatNumberOptions {
  prefix?: string;
  suffix?: string;
  thousand?: string;
}

export const formatPrice = (
  value: string | number,
  locale?: "vi" | "en",
  options?: FormatNumberOptions
) => {
  const prefix = options?.prefix || (locale === "vi" ? "" : "$");
  const suffix = options?.suffix || (locale === "vi" ? "đ" : "");
  const thousand = options?.thousand || ",";
  const valueString = value.toString();
  let result = "";

  if (valueString.length > 9) {
    result = valueString.slice(0, -9) + "B";
  } else if (valueString.length > 6) {
    result = valueString.slice(0, -6) + "M";
  } else if (valueString.length > 5) {
    result = valueString.slice(0, -3) + "K";
  } else {
    result = valueString.replace(/\B(?=(\d{3})+(?!\d))/g, thousand);
  }
  return prefix + result + suffix;
};
