declare const _exports: {
    new (): import("./lib/utilities_es");
    decodeBase64(encodedString: string): string;
    createObjectWithOrderedKeys(obj: any, startProperties?: string[], endProperties?: string[]): any;
    removeKeys(object: any, keys: string[]): any;
    uniqueValues(options?: {
        /**
         * Array of items or values to get unique values from
         */
        array: any[];
        /**
         * Key on item to get unique values for.
         *
         * If this is not set we will assume "array" is a flat array with values only and based on that will return unique values
         */
        key?: string;
        /**
         * Array of which item keys to get unique items for.
         *
         * If this is not set this will return array with string values only.
         *
         * We will assume "array" contains object items.
         *
         * Requires "key" to be set
         *
         * Will return array with items containing keys.
         */
        keys?: any[];
    }): any[];
    relativeDateFormat(options: {
        /**
         * Date object or date ISO string to format relative date from
         */
        toDate: string | Date;
        /**
         * Date object or date ISO string to be starting point (Default = new Date())
         */
        fromDate?: string | Date;
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
    currencyFormat(options: {
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
            notation: "standard" | "compact" | "scientific" | "engineering";
            /**
             * When to display the sign for the number (Default = "auto")
             */
            signDisplay: "always" | "auto" | "exceptZero" | "never";
            /**
             * The unit formatting style to use in unit formatting (Default = "short")
             */
            unitDisplay: "long" | "short" | "narrow";
        };
    }): string;
};
export = _exports;
