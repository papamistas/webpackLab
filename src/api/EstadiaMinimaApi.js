/*
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import { ApiClient } from "../ApiClient";
import { EstadiaMinima } from "../model/EstadiaMinima";
import { EstadiaMinimaJsonld } from "../model/EstadiaMinimaJsonld";
import { InlineResponse2006 } from "../model/InlineResponse2006";

/**
 * EstadiaMinima service.
 * @module api/EstadiaMinimaApi
 * @version 0.0.0
 */
export class EstadiaMinimaApi {
  /**
    * Constructs a new EstadiaMinimaApi. 
    * @alias module:api/EstadiaMinimaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the deleteEstadiaMinimaItem operation.
   * @callback moduleapi/EstadiaMinimaApi~deleteEstadiaMinimaItemCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Removes the EstadiaMinima resource.
   * Removes the EstadiaMinima resource.
   * @param {String} id Resource identifier
   * @param {module:api/EstadiaMinimaApi~deleteEstadiaMinimaItemCallback} callback The callback function, accepting three arguments: error, data, response
   */
  deleteEstadiaMinimaItem(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling deleteEstadiaMinimaItem"
      );
    }

    let pathParams = {
      id: id,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = [];
    let returnType = null;

    return this.apiClient.callApi(
      "/api/estadia_minimas/{id}",
      "DELETE",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the getEstadiaMinimaCollection operation.
   * @callback moduleapi/EstadiaMinimaApi~getEstadiaMinimaCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2006{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves the collection of EstadiaMinima resources.
   * Retrieves the collection of EstadiaMinima resources.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to <.>)
   * @param {module:api/EstadiaMinimaApi~getEstadiaMinimaCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getEstadiaMinimaCollection(opts, callback) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      page: opts["page"],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = InlineResponse2006;

    return this.apiClient.callApi(
      "/api/estadia_minimas",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the getEstadiaMinimaItem operation.
   * @callback moduleapi/EstadiaMinimaApi~getEstadiaMinimaItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/EstadiaMinimaJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves a EstadiaMinima resource.
   * Retrieves a EstadiaMinima resource.
   * @param {String} id Resource identifier
   * @param {module:api/EstadiaMinimaApi~getEstadiaMinimaItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getEstadiaMinimaItem(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling getEstadiaMinimaItem"
      );
    }

    let pathParams = {
      id: id,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = EstadiaMinimaJsonld;

    return this.apiClient.callApi(
      "/api/estadia_minimas/{id}",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the patchEstadiaMinimaItem operation.
   * @callback moduleapi/EstadiaMinimaApi~patchEstadiaMinimaItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/EstadiaMinimaJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Updates the EstadiaMinima resource.
   * Updates the EstadiaMinima resource.
   * @param {module:model/EstadiaMinima} body The updated EstadiaMinima resource
   * @param {String} id Resource identifier
   * @param {module:api/EstadiaMinimaApi~patchEstadiaMinimaItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  patchEstadiaMinimaItem(body, id, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling patchEstadiaMinimaItem"
      );
    }
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling patchEstadiaMinimaItem"
      );
    }

    let pathParams = {
      id: id,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/merge-patch+json"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = EstadiaMinimaJsonld;

    return this.apiClient.callApi(
      "/api/estadia_minimas/{id}",
      "PATCH",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the postEstadiaMinimaCollection operation.
   * @callback moduleapi/EstadiaMinimaApi~postEstadiaMinimaCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/EstadiaMinimaJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a EstadiaMinima resource.
   * Creates a EstadiaMinima resource.
   * @param {module:model/EstadiaMinimaJsonld} body The new EstadiaMinima resource
   * @param {module:api/EstadiaMinimaApi~postEstadiaMinimaCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  postEstadiaMinimaCollection(body, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling postEstadiaMinimaCollection"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = EstadiaMinimaJsonld;

    return this.apiClient.callApi(
      "/api/estadia_minimas",
      "POST",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the putEstadiaMinimaItem operation.
   * @callback moduleapi/EstadiaMinimaApi~putEstadiaMinimaItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/EstadiaMinimaJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Replaces the EstadiaMinima resource.
   * Replaces the EstadiaMinima resource.
   * @param {module:model/EstadiaMinimaJsonld} body The updated EstadiaMinima resource
   * @param {String} id Resource identifier
   * @param {module:api/EstadiaMinimaApi~putEstadiaMinimaItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  putEstadiaMinimaItem(body, id, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling putEstadiaMinimaItem"
      );
    }
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling putEstadiaMinimaItem"
      );
    }

    let pathParams = {
      id: id,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = EstadiaMinimaJsonld;

    return this.apiClient.callApi(
      "/api/estadia_minimas/{id}",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
}
