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
import { InlineResponse20021 } from "../model/InlineResponse20021";
import { TipoAlojamento } from "../model/TipoAlojamento";
import { TipoAlojamentoJsonld } from "../model/TipoAlojamentoJsonld";

/**
 * TipoAlojamento service.
 * @module api/TipoAlojamentoApi
 * @version 0.0.0
 */
export class TipoAlojamentoApi {
  /**
    * Constructs a new TipoAlojamentoApi. 
    * @alias module:api/TipoAlojamentoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the deleteTipoAlojamentoItem operation.
   * @callback moduleapi/TipoAlojamentoApi~deleteTipoAlojamentoItemCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Removes the TipoAlojamento resource.
   * Removes the TipoAlojamento resource.
   * @param {String} idTipoAlojamento Resource identifier
   * @param {module:api/TipoAlojamentoApi~deleteTipoAlojamentoItemCallback} callback The callback function, accepting three arguments: error, data, response
   */
  deleteTipoAlojamentoItem(idTipoAlojamento, callback) {
    let postBody = null;
    // verify the required parameter 'idTipoAlojamento' is set
    if (idTipoAlojamento === undefined || idTipoAlojamento === null) {
      throw new Error(
        "Missing the required parameter 'idTipoAlojamento' when calling deleteTipoAlojamentoItem"
      );
    }

    let pathParams = {
      idTipoAlojamento: idTipoAlojamento,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = [];
    let returnType = null;

    return this.apiClient.callApi(
      "/api/tipo_alojamentos/{idTipoAlojamento}",
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
   * Callback function to receive the result of the getTipoAlojamentoCollection operation.
   * @callback moduleapi/TipoAlojamentoApi~getTipoAlojamentoCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse20021{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves the collection of TipoAlojamento resources.
   * Retrieves the collection of TipoAlojamento resources.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to <.>)
   * @param {module:api/TipoAlojamentoApi~getTipoAlojamentoCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getTipoAlojamentoCollection(opts, callback) {
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
    let returnType = InlineResponse20021;

    return this.apiClient.callApi(
      "/api/tipo_alojamentos",
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
   * Callback function to receive the result of the getTipoAlojamentoItem operation.
   * @callback moduleapi/TipoAlojamentoApi~getTipoAlojamentoItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TipoAlojamentoJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves a TipoAlojamento resource.
   * Retrieves a TipoAlojamento resource.
   * @param {String} idTipoAlojamento Resource identifier
   * @param {module:api/TipoAlojamentoApi~getTipoAlojamentoItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getTipoAlojamentoItem(idTipoAlojamento, callback) {
    let postBody = null;
    // verify the required parameter 'idTipoAlojamento' is set
    if (idTipoAlojamento === undefined || idTipoAlojamento === null) {
      throw new Error(
        "Missing the required parameter 'idTipoAlojamento' when calling getTipoAlojamentoItem"
      );
    }

    let pathParams = {
      idTipoAlojamento: idTipoAlojamento,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = TipoAlojamentoJsonld;

    return this.apiClient.callApi(
      "/api/tipo_alojamentos/{idTipoAlojamento}",
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
   * Callback function to receive the result of the patchTipoAlojamentoItem operation.
   * @callback moduleapi/TipoAlojamentoApi~patchTipoAlojamentoItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TipoAlojamentoJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Updates the TipoAlojamento resource.
   * Updates the TipoAlojamento resource.
   * @param {module:model/TipoAlojamento} body The updated TipoAlojamento resource
   * @param {String} idTipoAlojamento Resource identifier
   * @param {module:api/TipoAlojamentoApi~patchTipoAlojamentoItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  patchTipoAlojamentoItem(body, idTipoAlojamento, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling patchTipoAlojamentoItem"
      );
    }
    // verify the required parameter 'idTipoAlojamento' is set
    if (idTipoAlojamento === undefined || idTipoAlojamento === null) {
      throw new Error(
        "Missing the required parameter 'idTipoAlojamento' when calling patchTipoAlojamentoItem"
      );
    }

    let pathParams = {
      idTipoAlojamento: idTipoAlojamento,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/merge-patch+json"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = TipoAlojamentoJsonld;

    return this.apiClient.callApi(
      "/api/tipo_alojamentos/{idTipoAlojamento}",
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
   * Callback function to receive the result of the postTipoAlojamentoCollection operation.
   * @callback moduleapi/TipoAlojamentoApi~postTipoAlojamentoCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TipoAlojamentoJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a TipoAlojamento resource.
   * Creates a TipoAlojamento resource.
   * @param {module:model/TipoAlojamentoJsonld} body The new TipoAlojamento resource
   * @param {module:api/TipoAlojamentoApi~postTipoAlojamentoCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  postTipoAlojamentoCollection(body, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling postTipoAlojamentoCollection"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = TipoAlojamentoJsonld;

    return this.apiClient.callApi(
      "/api/tipo_alojamentos",
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
   * Callback function to receive the result of the putTipoAlojamentoItem operation.
   * @callback moduleapi/TipoAlojamentoApi~putTipoAlojamentoItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TipoAlojamentoJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Replaces the TipoAlojamento resource.
   * Replaces the TipoAlojamento resource.
   * @param {module:model/TipoAlojamentoJsonld} body The updated TipoAlojamento resource
   * @param {String} idTipoAlojamento Resource identifier
   * @param {module:api/TipoAlojamentoApi~putTipoAlojamentoItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  putTipoAlojamentoItem(body, idTipoAlojamento, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling putTipoAlojamentoItem"
      );
    }
    // verify the required parameter 'idTipoAlojamento' is set
    if (idTipoAlojamento === undefined || idTipoAlojamento === null) {
      throw new Error(
        "Missing the required parameter 'idTipoAlojamento' when calling putTipoAlojamentoItem"
      );
    }

    let pathParams = {
      idTipoAlojamento: idTipoAlojamento,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = TipoAlojamentoJsonld;

    return this.apiClient.callApi(
      "/api/tipo_alojamentos/{idTipoAlojamento}",
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
