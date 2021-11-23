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
}
