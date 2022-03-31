declare const _exports: {
    new (): import("./lib/utilities");
    inspect(obj: any): void;
    decodeBase64(encodedString: string): string;
    createObjectWithOrderedKeys(obj: any, startProperties?: string[], endProperties?: string[]): any;
    removeKeys(object: any, keys: string[]): any;
    uniqueValues(array: any[], key: string, keys: any[]): any[];
};
export = _exports;
