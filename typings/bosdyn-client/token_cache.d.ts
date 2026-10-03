/**
 * No-op default cache that serves as an interface.
 */
export class TokenCache {
    read(name: any): void;
    clear(name: any): void;
    write(name: any, token: any): void;
    /**
     * Returns a set of valid keys that contains the name.
     */
    match(name: any): never[];
}
/**
 * Handles transfer from in memory tokens to arbitrary storage e.g. filesystem.
 */
export class TokenCacheFilesystem {
    /**
     * @param {string} [cacheDirectory='~/.bosdyn/user_tokens'] The cache's path. A leading ~ is the home directory, like
     * os.path.expanduser() in Python (it was a directory named ~; the ~user form is not supported).
     */
    constructor(cacheDirectory?: string);
    directory: string;
    /**
     * @param {string} name The file's name.
     * @returns {string|Buffer} The content of the file.
     * @throws {NotInCacheError}
     */
    read(name: string): string | Buffer;
    /**
     * @param {string} name The file's name.
     * @returns {void}
     * @throws {ClearFailedError}
     */
    clear(name: string): void;
    /**
     * @param {string} name The file's name.
     * @param {string} token The token to write in the file.
     * @returns {void}
     * @throws {WriteFailedError}
     */
    write(name: string, token: string): void;
    /**
     * Returns a set of valid keys that contains the name.
     * @param {string} name The file's name to match.
     * @returns {Array<string>|Array}
     */
    match(name: string): Array<string> | any[];
    /**
     * @param {string} name The file's name.
     * @returns {string}
     * @private
     */
    private _nameToFilename;
    /**
     * @param {string} filename The complete file's name.
     * @returns {string}
     * @private
     */
    private _filenameToName;
}
/** General class of errors to handle non-response non-grpc errors. */
export class TokenCacheError extends BosdynError {
}
/** Failed to delete the token from storage. */
export class ClearFailedError extends TokenCacheError {
}
/** Failed to read the token from cache. */
export class NotInCacheError extends TokenCacheError {
}
/** Failed to write the token to storage. */
export class WriteFailedError extends TokenCacheError {
}
import { BosdynError } from "./exceptions";
