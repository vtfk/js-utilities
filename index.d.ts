declare const _exports: {
    new (): import("./lib/utilities");
    inspect(obj: any): void;
    decodeBase64(encodedString: string): string;
    createObjectWithOrderedKeys(obj: any, startProperties?: string[], endProperties?: string[]): any;
    removeKeys(object: any, keys: string[]): any;
    uniqueValues(array: any[], key: string, keys: any[]): any[];
    relativeDateFormat(options: {
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
};
export = _exports;
