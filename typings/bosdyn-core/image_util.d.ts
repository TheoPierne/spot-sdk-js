export class Viewer {
    format: null;
    options: {};
    show(image: any, options: any): Promise<boolean>;
    get_format(): null;
    get_command(): void;
    show_image(image: any, options: any): Promise<boolean>;
    save_image(image: any): Promise<any>;
    show_file(file: any, options?: {}): boolean;
}
/**
 * Display image with default image viewer.
 * @param {Buffer|Array|string} image The data of the image.
 * @param {Object} options The options of the image.
 * @param {string} options.title The title of the image.
 * @returns {Promise<boolean>}
 */
export function show(image: Buffer | any[] | string, options?: {
    title: string;
}): Promise<boolean>;
/**
 * Save image to path. (Convert any type of image into .png | .jpg | ...)
 * @param {Buffer|Array|string} image The data of the image.
 * @param {string} name The name of the image.
 * @returns {Promise<import('sharp').OutputInfo>}
 */
export function save(image: Buffer | any[] | string, name: string): Promise<import("sharp").OutputInfo>;
/**
 * Register an image viewer. If order < 0 the viewer is used in first place.
 * @param {typeof Viewer|Viewer} viewer A viewer, or its class.
 * @param {number} [order=1] The order to put the viewer.
 * @returns {void}
 */
export function register(viewer: typeof Viewer | Viewer, order?: number): void;
