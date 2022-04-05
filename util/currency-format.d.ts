export function formatCurrency({ number, locale, options }: FormatCurrencyOptions): string;
export type FormatCurrencyOptions = {
    /**
     * Number to format
     */
    number: number;
    /**
     * Locale to format number into (Default = 'en')
     */
    locale?: string;
    /**
     * CurrencyFormat options
     */
    options?: CurrencyFormatOptions;
};
/**
 * CurrencyFormat options
 */
export type CurrencyFormatOptions = {
    /**
     * Only used when notation is "compact" (Default = "short")
     */
    compactDisplay?: "long" | "short";
    /**
     * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR"
     */
    currency: string;
    /**
     * In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. You can enable this formatting by setting the currencySign option to "accounting". The default value is "standard"
     */
    currencySign?: "standard" | "accounting";
    /**
     * The minimum number of fraction digits to use. Possible values are from 0 to 20 (Default = 0)
     */
    minimumFractionDigits?: number;
    /**
     * The maximum number of fraction digits to use. Possible values are from 0 to 20 (the default for plain number formatting is the larger of minimumFractionDigits and 3)
     */
    maximumFractionDigits?: number;
    /**
     * The minimum number of significant digits to use. Possible values are from 1 to 21 (Default = 1)
     */
    minimumSignificantDigits?: number;
    /**
     * The maximum number of significant digits to use. Possible values are from 1 to 21 (Default = 21)
     */
    maximumSignificantDigits?: number;
    /**
     * The minimum number of integer digits to use. Possible values are from 1 to 21 (Default = 1)
     */
    minimumIntegerDigits?: number;
    /**
     * The formatting that should be displayed for the number (Default = "standard")
     */
    notation: "compact" | "standard" | "scientific" | "engineering";
    /**
     * When to display the sign for the number (Default = "auto")
     */
    signDisplay: "always" | "exceptZero" | "auto" | "never";
    /**
     * The unit formatting style to use in unit formatting (Default = "short")
     */
    unitDisplay: "long" | "short" | "narrow";
};
