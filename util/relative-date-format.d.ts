export function formatRelativeDate({ toDate, fromDate, locale, options }: RelativeDateOptions): string;
/**
 * RelativeDateOptions
 */
export type RelativeDateOptions = {
    /**
     * Date object or date ISO string to format relative date from
     */
    toDate: Date | string;
    /**
     * Date object or date ISO string to be starting point (Default = new Date())
     */
    fromDate?: Date | string;
    /**
     * Locale to format date into (Default = 'en')
     */
    locale?: string;
    /**
     * RelativeTimeFormat options
     */
    options?: RelativeTimeFormatOptions;
};
/**
 * RelativeTimeFormat options
 */
export type RelativeTimeFormatOptions = {
    /**
     * "Always" use numeric values or "auto" choose value
     */
    numeric?: "always" | "auto";
    /**
     * "long" time style, "short" time style or "narrow" time style
     */
    style?: "long" | "short" | "narrow";
};
