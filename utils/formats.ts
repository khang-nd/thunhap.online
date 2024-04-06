interface FormatNumberOptions {
  prefix?: string;
  suffix?: string;
  thousand?: string;
}

type LocaleSuffix = Record<string, string>;

const EXCHANGE_RATE = 24500;
const thousandSuffix: LocaleSuffix = { en: "K", vi: "k" };
const millionSuffix: LocaleSuffix = { en: "M", vi: "tr" };
const billionSuffix: LocaleSuffix = { en: "B", vi: "tỷ" };

export const formatPrice = (
  value: string | number,
  locale: string = "en",
  options?: FormatNumberOptions
) => {
  const currencyPrefix = options?.prefix || (locale === "vi" ? "" : "$");
  const currencySuffix = options?.suffix || (locale === "vi" ? " đ" : "");
  const thousand = options?.thousand || ",";
  const convertedValue =
    locale === "vi" ? Number(value) * EXCHANGE_RATE : value;
  const valueString = convertedValue.toString();
  let result = "";
  let suffix = "";

  if (valueString.length > 9) {
    result = valueString.slice(0, -9);
    suffix = billionSuffix[locale];
  } else if (valueString.length > 6) {
    result = valueString.slice(0, -6);
    suffix = millionSuffix[locale];
  } else if (valueString.length > 5) {
    result = valueString.slice(0, -3);
    suffix = thousandSuffix[locale];
  } else {
    result = valueString.replace(/\B(?=(\d{3})+(?!\d))/g, thousand);
  }
  return currencyPrefix + result + suffix + currencySuffix;
};
