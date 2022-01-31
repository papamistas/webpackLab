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
import { Casa } from "../model/Casa";
import { CasaJsonld } from "../model/CasaJsonld";
import { InlineResponse2002 } from "../model/InlineResponse2002";

/**
 * Casa service.
 * @module api/CasaApi
 * @version 0.0.0
 */
export class CasaApi {
  /**
    * Constructs a new CasaApi. 
    * @alias module:api/CasaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the deleteCasaItem operation.
   * @callback moduleapi/CasaApi~deleteCasaItemCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Removes the Casa resource.
   * Removes the Casa resource.
   * @param {String} codCasa Resource identifier
   * @param {module:api/CasaApi~deleteCasaItemCallback} callback The callback function, accepting three arguments: error, data, response
   */
  deleteCasaItem(codCasa, callback) {
    let postBody = null;
    // verify the required parameter 'codCasa' is set
    if (codCasa === undefined || codCasa === null) {
      throw new Error(
        "Missing the required parameter 'codCasa' when calling deleteCasaItem"
      );
    }

    let pathParams = {
      codCasa: codCasa,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = [];
    let returnType = null;

    return this.apiClient.callApi(
      "/api/casas/{codCasa}",
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
   * Callback function to receive the result of the getCasaCollection operation.
   * @callback moduleapi/CasaApi~getCasaCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2002{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves the collection of Casa resources.
   * Retrieves the collection of Casa resources.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to <.>)
   * @param {module:api/CasaApi~getCasaCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getCasaCollection(opts, callback) {
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
    let returnType = InlineResponse2002;

    return this.apiClient.callApi(
      "/api/casas",
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
   * Callback function to receive the result of the getCasaItem operation.
   * @callback moduleapi/CasaApi~getCasaItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CasaJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves a Casa resource.
   * Retrieves a Casa resource.
   * @param {String} codCasa Resource identifier
   * @param {module:api/CasaApi~getCasaItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getCasaItem(codCasa, callback) {
    let postBody = null;
    // verify the required parameter 'codCasa' is set
    if (codCasa === undefined || codCasa === null) {
      throw new Error(
        "Missing the required parameter 'codCasa' when calling getCasaItem"
      );
    }

    let pathParams = {
      codCasa: codCasa,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = CasaJsonld;

    return this.apiClient.callApi(
      "/api/casas/{codCasa}",
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
   * Callback function to receive the result of the patchCasaItem operation.
   * @callback moduleapi/CasaApi~patchCasaItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CasaJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Updates the Casa resource.
   * Updates the Casa resource.
   * @param {module:model/Casa} body The updated Casa resource
   * @param {String} codCasa Resource identifier
   * @param {module:api/CasaApi~patchCasaItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  patchCasaItem(body, codCasa, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling patchCasaItem"
      );
    }
    // verify the required parameter 'codCasa' is set
    if (codCasa === undefined || codCasa === null) {
      throw new Error(
        "Missing the required parameter 'codCasa' when calling patchCasaItem"
      );
    }

    let pathParams = {
      codCasa: codCasa,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/merge-patch+json"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = CasaJsonld;

    return this.apiClient.callApi(
      "/api/casas/{codCasa}",
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
   * Callback function to receive the result of the postCasaCollection operation.
   * @callback moduleapi/CasaApi~postCasaCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CasaJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a Casa resource.
   * Creates a Casa resource.
   * @param {module:model/CasaJsonld} body The new Casa resource
   * @param {module:api/CasaApi~postCasaCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  postCasaCollection(body, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling postCasaCollection"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = CasaJsonld;

    return this.apiClient.callApi(
      "/api/casas",
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
   * Callback function to receive the result of the putCasaItem operation.
   * @callback moduleapi/CasaApi~putCasaItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CasaJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Replaces the Casa resource.
   * Replaces the Casa resource.
   * @param {module:model/CasaJsonld} body The updated Casa resource
   * @param {String} codCasa Resource identifier
   * @param {module:api/CasaApi~putCasaItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  putCasaItem(body, codCasa, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling putCasaItem"
      );
    }
    // verify the required parameter 'codCasa' is set
    if (codCasa === undefined || codCasa === null) {
      throw new Error(
        "Missing the required parameter 'codCasa' when calling putCasaItem"
      );
    }

    let pathParams = {
      codCasa: codCasa,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = CasaJsonld;

    return this.apiClient.callApi(
      "/api/casas/{codCasa}",
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
