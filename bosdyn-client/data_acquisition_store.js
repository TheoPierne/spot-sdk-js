const {
	common_header_errors, 
	error_factory, 
	handle_common_header_errors, 
	handle_unset_status_error, 
	error_pair, 
	BaseClient
} = require('./common');
const {ResponseError} = require('./exceptions');
const data_acquisition_store = require('../bosdyn/api/data_acquisition_store_pb');
const data_acquisition_store_service = require('../bosdyn/api/data_acquisition_store_service_grpc_pb');
const image_pb = require('../bosdyn/api/image_pb');
const {now_timestamp} = require('../bosdyn-core/util');

/**
* A client for triggering data acquisition store methods.
* @class DataAcquisitionStoreClient
* @extends BaseClient
*/
class DataAcquisitionStoreClient extends BaseClient {

	static default_service_name = 'data-acquisition-store';
    static service_type = 'bosdyn.api.DataAcquisitionStoreService';

    /**
    * Create an instance of DataAcquisitionStoreClient's class.
    * @param {?string} name
    */
    constructor(name=null){
    	super(data_acquisition_store_service.DataAcquisitionStoreServiceClient, name);
    	this._timesync_endpoint = null;
    }

    /**
    * Update instance from another object.
    * @param {object} other The object where to copy from.
    * @return {void}
    */
    update_from(other){
        super.update_from(other);

        try{
            this._timesync_endpoint = other.time_sync.endpoint;
        }catch(e){

        }
    }

    /**
    * List capture actions that satisfy the query parameters.
    * @param {data_acquisition_store.DataQueryParams} query Query parameters.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {array|object} CaptureActionIds for the actions matching the query parameters.
    */
    async list_capture_actions(query, args){
        const request = new data_acquisition_store.ListCaptureActionsRequest().setQuery(query);
        return await this.call(this._stub.listCaptureActions, request, _get_action_ids, common_header_errors, args);
    }

    /**
    * Async version of list_capture_actions().
    * @param {data_acquisition_store.DataQueryParams} query Query parameters.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {array|object} CaptureActionIds for the actions matching the query parameters.
    */
    list_capture_actions_async(query, args){
        const request = new data_acquisition_store.ListCaptureActionsRequest().setQuery(query);
        return this.call_async(this._stub.listCaptureActions, request, _get_action_ids, common_header_errors, args);
    }

    /**
    * List images that satisfy the query parameters.
    * @param {data_acquisition_store.DataQueryParams} query Query parameters.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {array|object} DataIdentifiers for the images matching the query parameters.
    */
    async list_stored_images(query, args){
        const request = new data_acquisition_store.ListStoredImagesRequest().setQuery(query);
        return await this.call(this._stub.listStoredImages, request, _get_data_ids, common_header_errors, args);
    }

    /**
    * Async version of list_stored_images().
    * @param {data_acquisition_store.DataQueryParams} query Query parameters.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {array|object} DataIdentifiers for the images matching the query parameters.
    */
    list_stored_images_async(query, args){
        const request = new data_acquisition_store.ListStoredImagesRequest().setQuery(query);
        return this.call_async(this._stub.listStoredImages, request, _get_data_ids, common_header_errors, args);
    }

    /**
    * List metadata that satisfy the query parameters.
    * @param {data_acquisition_store.DataQueryParams} query Query parameters.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {array|object} DataIdentifiers for the images matching the query parameters.
    */
    async list_stored_metadata(query, args){
        const request = new data_acquisition_store.ListStoredMetadataRequest().setQuery(query);
        return await this.call(this._stub.listStoredMetadata, request, _get_data_ids, common_header_errors, args);
    }

    /**
    * Async version of list_stored_metadata().
    * @param {data_acquisition_store.DataQueryParams} query Query parameters.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {array|object} DataIdentifiers for the images matching the query parameters.
    */
    list_stored_metadata_async(query, args){
        const request = new data_acquisition_store.ListStoredMetadataRequest().setQuery(query);
        return this.call(this._stub.listStoredMetadata, request, _get_data_ids, common_header_errors, args);
    }

    /**
    * List data that satisfy the query parameters.
    * @param {data_acquisition_store.DataQueryParams} query Query parameters.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {array|object} DataIdentifiers for the images matching the query parameters.
    */
    async list_stored_data(query, args){
        const request = new data_acquisition_store.ListStoredDataRequest().setQuery(query);
        return await this.call(this._stub.listStoredData, request, _get_data_ids, common_header_errors, args);
    }

    /**
    * Async version of list_stored_data().
    * @param {data_acquisition_store.DataQueryParams} query Query parameters.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {array|object} DataIdentifiers for the images matching the query parameters.
    */
    list_stored_data_async(query, args){
        const request = new data_acquisition_store.ListStoredDataRequest().setQuery(query);
        return this.call_async(this._stub.listStoredData, request, _get_data_ids, common_header_errors, args);
    }

    /**
    * Store image.
    * @param {image_pb.ImageCapture} image Image to store.
    * @param {data_acquisition_pb.DataIdentifier} data_id Data identifier to use for storing the image.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {data_acquisition_store.StoreImageResponse} StoreImageResponse response.
    */
    async store_image(image, data_id, args){
        const request = new data_acquisition_store.StoreImageRequest().setImage(image).setDataId(data_id);
        return await this.call(this._stub.storeImage, request, null, common_header_errors, args);
    }

    /**
    * Async version of store_image().
    * @param {image_pb.ImageCapture} image Image to store.
    * @param {data_acquisition_pb.DataIdentifier} data_id Data identifier to use for storing the image.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {data_acquisition_store.StoreImageResponse} StoreImageResponse response.
    */
    store_image_async(image, data_id, args){
        const request = new data_acquisition_store.StoreImageRequest().setImage(image).setDataId(data_id);
        return this.call_async(this._stub.storeImage, request, null, common_header_errors, args);
    }

    /**
    * Store metadata.
    * @param {data_acquisition_pb.AssociatedMetadata} associated_metadata Metadata to store. If metadata is
    * not associated with a particular piece of data, the data_id field in this object
    * needs to specify only the action_id part.
    * @param {data_acquisition_pb.DataIdentifier} data_id Data identifier to use for storing this
    * associated metadata.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {data_acquisition_store.StoreMetadataResponse} StoreMetadataResponse response.
    */
    async store_metadata(associated_metadata, data_id, args){
        const request = new data_acquisition_store.StoreMetadataRequest().setMetadata(associated_metadata).setDataId(data_id);
        return await this.call(this._stub.storeMetadata, request, null, common_header_errors, args);
    }

    /**
    * Async version of store_metadata().
    * @param {data_acquisition_pb.AssociatedMetadata} associated_metadata Metadata to store. If metadata is
    * not associated with a particular piece of data, the data_id field in this object
    * needs to specify only the action_id part.
    * @param {data_acquisition_pb.DataIdentifier} data_id Data identifier to use for storing this
    * associated metadata.
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {data_acquisition_store.StoreMetadataResponse} StoreMetadataResponse response.
    */
    store_metadata_async(associated_metadata, data_id, args){
        const request = new data_acquisition_store.StoreMetadataRequest().setMetadata(associated_metadata).setDataId(data_id);
        return this.call_async(this._stub.storeMetadata, request, null, common_header_errors, args);
    }

    /**
    * Store data.
    * @param {!(string|Uint8Array)} data Arbitrary data to store.
    * @param {data_acquisition_pb.DataIdentifier} data_id Data identifier to use for storing this data.
    * @param {?string} [file_extension=null] File extension to use for writing the data to a file. 
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {data_acquisition_store.StoreDataResponse} StoreDataResponse response.
    */
    async store_data(data, data_id, file_extension = null, args){
        const request = new data_acquisition_store.StoreDataRequest().setData(data).setDataId(data_id).setFileExtension(file_extension);
        return await this.call(this._stub.storeData, request, null, common_header_errors, args);
    }

    /**
    * Async version of store_data().
    * @param {!(string|Uint8Array)} data Arbitrary data to store.
    * @param {data_acquisition_pb.DataIdentifier} data_id Data identifier to use for storing this data.
    * @param {?string} [file_extension=null] File extension to use for writing the data to a file. 
    * @param {object} [args] Extra arguments for controlling RPC details.
    * @return {data_acquisition_store.StoreDataResponse} StoreDataResponse response.
    */
    store_data_async(data, data_id, file_extension = null, args){
        const request = (new data_acquisition_store.StoreDataRequest()).setData(data).setDataId(data_id).setFileExtension(file_extension);
        return this.call_async(this._stub.storeData, request, null, common_header_errors, args);
    }

};

function _get_action_ids(response){
    return response.getActionIds();
}

function _get_data_ids(response){
    return response.getDataIds();
}

function _get_image(response){
    return response.getImage();
}

function _get_metadata(response){
    return response.getMetadata();
}

module.exports = {
	DataAcquisitionStoreClient
};