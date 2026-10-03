/**
 * A class to assist with writing POD data values into a series, within a DataWriter.
 */
export class PodSeriesWriter {
    constructor(dataWriter: any, seriesType: any, seriesSpec: any, podType: any, dimensions?: null, annotations?: null, dataBlockSize?: number);
    /**
     * @type {import('./data_writer').DataWriter}
     */
    _dataWriter: import("./data_writer").DataWriter;
    _seriesType: any;
    _seriesSpec: any;
    _podType: any;
    _dimensions: never[];
    _seriesIndex: number;
    _dataBlockSize: number;
    _numValuesPerSample: number;
    _bytesPerSample: number;
    _block: any;
    _timestampNsec: string | number | bigint | null;
    /**
     * Add sample to data block, and write block if block is full.
     * @param {bigint|number|string} timestampNsec nsec since unix epoch to timestamp the data
     * @param {number|bigint|Array|ArrayBufferView} sample The values of the sample (nested arrays for several
     * dimensions), a single value for a series without dimension.
     * @throws {DataFormatError} The sample does not have the values of the series.
     */
    write(timestampNsec: bigint | number | string, sample: number | bigint | any[] | ArrayBufferView): void;
    /**
     * If there are samples which haven't been written to the file, write them now.
     */
    finishBlock(): void;
    /**
     * Return the seriesType (string) with which the series was registered.
     */
    get seriesType(): string;
    /**
     * Return the seriesSpec ({key -> value}) with which the series was registered.
     */
    get seriesSpec(): any;
}
