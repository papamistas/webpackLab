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
import { Destino } from "../model/Destino";
import { DestinoJsonld } from "../model/DestinoJsonld";
import { InlineResponse2005 } from "../model/InlineResponse2005";

/**
 * Destino service.
 * @module api/DestinoApi
 * @version 0.0.0
 */
export class DestinoApi {
  /**
    * Constructs a new DestinoApi. 
    * @alias module:api/DestinoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the deleteDestinoItem operation.
   * @callback moduleapi/DestinoApi~deleteDestinoItemCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Removes the Destino resource.
   * Removes the Destino resource.
   * @param {String} idDestino Resource identifier
   * @param {module:api/DestinoApi~deleteDestinoItemCallback} callback The callback function, accepting three arguments: error, data, response
   */
  deleteDestinoItem(idDestino, callback) {
    let postBody = null;
    // verify the required parameter 'idDestino' is set
    if (idDestino === undefined || idDestino === null) {
      throw new Error(
        "Missing the required parameter 'idDestino' when calling deleteDestinoItem"
      );
    }

    let pathParams = {
      idDestino: idDestino,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = [];
    let returnType = null;

    return this.apiClient.callApi(
      "/api/destinos/{idDestino}",
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
   * Callback function to receive the result of the getDestinoCollection operation.
   * @callback moduleapi/DestinoApi~getDestinoCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2005{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves the collection of Destino resources.
   * Retrieves the collection of Destino resources.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to <.>)
   * @param {module:api/DestinoApi~getDestinoCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getDestinoCollection(opts, callback) {
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
    let returnType = InlineResponse2005;

    return this.apiClient.callApi(
      "/api/destinos",
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
   * Callback function to receive the result of the getDestinoItem operation.
   * @callback moduleapi/DestinoApi~getDestinoItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DestinoJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves a Destino resource.
   * Retrieves a Destino resource.
   * @param {String} idDestino Resource identifier
   * @param {module:api/DestinoApi~getDestinoItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getDestinoItem(idDestino, callback) {
    let postBody = null;
    // verify the required parameter 'idDestino' is set
    if (idDestino === undefined || idDestino === null) {
      throw new Error(
        "Missing the required parameter 'idDestino' when calling getDestinoItem"
      );
    }

    let pathParams = {
      idDestino: idDestino,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = DestinoJsonld;

    return this.apiClient.callApi(
      "/api/destinos/{idDestino}",
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
   * Callback function to receive the result of the patchDestinoItem operation.
   * @callback moduleapi/DestinoApi~patchDestinoItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DestinoJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Updates the Destino resource.
   * Updates the Destino resource.
   * @param {module:model/Destino} body The updated Destino resource
   * @param {String} idDestino Resource identifier
   * @param {module:api/DestinoApi~patchDestinoItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  patchDestinoItem(body, idDestino, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling patchDestinoItem"
      );
    }
    // verify the required parameter 'idDestino' is set
    if (idDestino === undefined || idDestino === null) {
      throw new Error(
        "Missing the required parameter 'idDestino' when calling patchDestinoItem"
      );
    }

    let pathParams = {
      idDestino: idDestino,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/merge-patch+json"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = DestinoJsonld;

    return this.apiClient.callApi(
      "/api/destinos/{idDestino}",
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
   * Callback function to receive the result of the postDestinoCollection operation.
   * @callback moduleapi/DestinoApi~postDestinoCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DestinoJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a Destino resource.
   * Creates a Destino resource.
   * @param {module:model/DestinoJsonld} body The new Destino resource
   * @param {module:api/DestinoApi~postDestinoCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  postDestinoCollection(body, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling postDestinoCollection"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = DestinoJsonld;

    return this.apiClient.callApi(
      "/api/destinos",
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
   * Callback function to receive the result of the putDestinoItem operation.
   * @callback moduleapi/DestinoApi~putDestinoItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DestinoJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Replaces the Destino resource.
   * Replaces the Destino resource.
   * @param {module:model/DestinoJsonld} body The updated Destino resource
   * @param {String} idDestino Resource identifier
   * @param {module:api/DestinoApi~putDestinoItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  putDestinoItem(body, idDestino, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling putDestinoItem"
      );
    }
    // verify the required parameter 'idDestino' is set
    if (idDestino === undefined || idDestino === null) {
      throw new Error(
        "Missing the required parameter 'idDestino' when calling putDestinoItem"
      );
    }

    let pathParams = {
      idDestino: idDestino,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = DestinoJsonld;

    return this.apiClient.callApi(
      "/api/destinos/{idDestino}",
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