export = Utilities;
declare class Utilities {
    /**
     * Inspects a object and console.logs out the result
     * ONLY WORKS IN NODE
     * @param {object} obj The javascript object you want to inspect
     * @returns
     */
    static inspect(obj: object): void;
    /**
     * Decodes base64 to a string
     * @param {string} encodedString
     * @returns {string} Decoded data
     */
    static decodeBase64(encodedString: string): string;
    /**
     * Takes in an object and ordered lists of how it's properties should be ordered
     * @param {object} obj The object containing the keys/properties
     * @param {String[]} startProperties A string array of what properties it should start with
     * @param {String[]} endProperties A string array of what keys/properties it should end with
     * @returns {object} A copy of the provided object with the keys in order
     */
    static createObjectWithOrderedKeys(obj: object, startProperties?: string[], endProperties?: string[]): object;
    /**
     * Recursively removes any keys in the object that matches with the keys-array
     * Outputs a new object with the matched keys removed
     * @param {object} object
     * @param {String[]} keys
     */
    static removeKeys(object: object, keys: string[]): any;
    /**
     * Get only unique key values from an array with items
     * @param {Array} array Array of items to get unique values from
     * @param {String} key Key on item to get unique values for. Will return array with string values only
     * @param {Array} keys Array of which item keys to get unique items for. Will return array with items containing keys
     * @returns {Array} Array of unique values
     */
    static uniqueValues(array: any[], key: string, keys: any[]): any[];
    /**
     * RelativeDateOptions
     * @typedef {Object} RelativeDateOptions
     * @property {Date|String} toDate Date object or date ISO string to format relative date from
     * @property {Date|String} [fromDate] Date object or date ISO string to be starting point (Default = new Date())
     * @property {String} [locale] Locale to format date into (Default = 'en')
     * @property {RelativeTimeFormatOptions} [options] RelativeTimeFormat options
     */
    /**
     * RelativeTimeFormat options
     * @typedef {Object} RelativeTimeFormatOptions
     * @property {"always"|"auto"} [numeric] "Always" use numeric values or "auto" choose value
     * @property {"long"|"short"|"narrow"} [style] "long" time style, "short" time style or "narrow" time style
     */
    /**
     * Formats the duration between two dates into a more readable, relative form
     * @param {RelativeDateOptions} options RelativeDate options
     * @returns The formatted string
     */
    static relativeDateFormat(options: {
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
        options?: {
            /**
             * "Always" use numeric values or "auto" choose value
             */
            numeric?: "always" | "auto";
            /**
             * "long" time style, "short" time style or "narrow" time style
             */
            style?: "long" | "short" | "narrow";
        };
    }): string;
    /**
     * @typedef {Object} FormatCurrencyOptions
     * @property {Number} number Number to format
     * @property {String} [locale] Locale to format number into (Default = 'en')
     * @property {CurrencyFormatOptions} [options] CurrencyFormat options
     */
    /**
     * CurrencyFormat options
     * @typedef {Object} CurrencyFormatOptions
     * @property {"long"|"short"} [compactDisplay] Only used when notation is "compact" (Default = "short")
     * @property {String} currency The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR"
     * @property {"standard"|"accounting"} [currencySign] In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. You can enable this formatting by setting the currencySign option to "accounting". The default value is "standard"
     * @property {Number} [minimumFractionDigits] The minimum number of fraction digits to use. Possible values are from 0 to 20 (Default = 0)
     * @property {Number} [maximumFractionDigits] The maximum number of fraction digits to use. Possible values are from 0 to 20 (the default for plain number formatting is the larger of minimumFractionDigits and 3)
     * @property {Number} [minimumSignificantDigits] The minimum number of significant digits to use. Possible values are from 1 to 21 (Default = 1)
     * @property {Number} [maximumSignificantDigits] The maximum number of significant digits to use. Possible values are from 1 to 21 (Default = 21)
     * @property {Number} [minimumIntegerDigits] The minimum number of integer digits to use. Possible values are from 1 to 21 (Default = 1)
     * @property {"compact"|"standard"|"scientific"|"engineering"} notation The formatting that should be displayed for the number (Default = "standard")
     * @property {"always"|"exceptZero"|"auto"|"never"} signDisplay When to display the sign for the number (Default = "auto")
     * @property {"long"|"short"|"narrow"} unitDisplay The unit formatting style to use in unit formatting (Default = "short")
     */
    /**
     * Format number in currency
     * @param {FormatCurrencyOptions} options FormatCurrency options
     * @returns {String} The formatted string
     */
    static currencyFormat(options: {
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
        options?: {
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
    }): string;
}
