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
     * @property {Date} toDate Date object to format relative date from
     * @property {Date} [fromDate] Date object to be starting point (Default = new Date())
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
}
