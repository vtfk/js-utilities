export function formatRelativeDate(toDate: Date, fromDate?: Date, locale?: string, options?: any): string;
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
