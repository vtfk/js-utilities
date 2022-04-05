export function formatRelativeDate({ toDate, fromDate, locale, options }: RelativeDateOptions): string;
/**
 * RelativeDateOptions
 */
export type RelativeDateOptions = {
    /**
     * Date object to format relative date from
     */
    toDate: Date;
    /**
     * Date object to be starting point (Default = new Date())
     */
    fromDate?: Date;
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
