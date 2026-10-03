/**
 * A class for reading a series of POD data from a DataFile.
 *
 * Methods throw ParseError if there is a problem with the format of the file.
 */
export class PodSeriesReader {
    /**
     * @template {new (...args: any[]) => any} T
     * @this {T}
     * @param {import('./data_reader').DataReader} dataReader
     * @param {Object<string, string>} seriesSpec
     * @returns {Promise<InstanceType<T>>}
     */
    static create<T extends new (...args: any[]) => any>(this: T, dataReader: import("./data_reader").DataReader, seriesSpec: {
        [x: string]: string;
    }): Promise<InstanceType<T>>;
    /**
     * @param {import('./data_reader').DataReader} dataReader
     */
    constructor(dataReader: import("./data_reader").DataReader);
    /** @type {import('./data_reader').DataReader} */
    _dataReader: import("./data_reader").DataReader;
    _numDataBlocks: Promise<number> | null;
    /**
     * Return the PodTypeDescriptor for the series.
     */
    get podType(): any;
    /**
     * Return the SeriesDescriptor for the series.
     */
    get seriesDescriptor(): any;
    /**
     * Number of data blocks in this series.
     */
    get numDataBlocks(): Promise<number>;
    /**
     * Return the POD data values from the data block of the given index.
     * @param {number} indexInSeries
     * @returns {Promise<[bigint, Array]>} The nanoseconds since the epoch, and the values of the samples (BigInt for the
     * 64 bits integers).
     */
    readSamples(indexInSeries: number): Promise<[bigint, any[]]>;
}
