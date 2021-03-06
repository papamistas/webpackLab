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
import { InlineResponse20016 } from "../model/InlineResponse20016";
import { Proprietario } from "../model/Proprietario";
import { ProprietarioJsonld } from "../model/ProprietarioJsonld";

/**
 * Proprietario service.
 * @module api/ProprietarioApi
 * @version 0.0.0
 */
export class ProprietarioApi {
  /**
    * Constructs a new ProprietarioApi. 
    * @alias module:api/ProprietarioApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the deleteProprietarioItem operation.
   * @callback moduleapi/ProprietarioApi~deleteProprietarioItemCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Removes the Proprietario resource.
   * Removes the Proprietario resource.
   * @param {String} propid Resource identifier
   * @param {module:api/ProprietarioApi~deleteProprietarioItemCallback} callback The callback function, accepting three arguments: error, data, response
   */
  deleteProprietarioItem(propid, callback) {
    let postBody = null;
    // verify the required parameter 'propid' is set
    if (propid === undefined || propid === null) {
      throw new Error(
        "Missing the required parameter 'propid' when calling deleteProprietarioItem"
      );
    }

    let pathParams = {
      propid: propid,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = [];
    let returnType = null;

    return this.apiClient.callApi(
      "/api/proprietarios/{propid}",
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
   * Callback function to receive the result of the getProprietarioCollection operation.
   * @callback moduleapi/ProprietarioApi~getProprietarioCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse20016{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves the collection of Proprietario resources.
   * Retrieves the collection of Proprietario resources.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to <.>)
   * @param {module:api/ProprietarioApi~getProprietarioCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getProprietarioCollection(opts, callback) {
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
    let returnType = InlineResponse20016;

    return this.apiClient.callApi(
      "/api/proprietarios",
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
   * Callback function to receive the result of the getProprietarioItem operation.
   * @callback moduleapi/ProprietarioApi~getProprietarioItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ProprietarioJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves a Proprietario resource.
   * Retrieves a Proprietario resource.
   * @param {String} propid Resource identifier
   * @param {module:api/ProprietarioApi~getProprietarioItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getProprietarioItem(propid, callback) {
    let postBody = null;
    // verify the required parameter 'propid' is set
    if (propid === undefined || propid === null) {
      throw new Error(
        "Missing the required parameter 'propid' when calling getProprietarioItem"
      );
    }

    let pathParams = {
      propid: propid,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = ProprietarioJsonld;

    return this.apiClient.callApi(
      "/api/proprietarios/{propid}",
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
   * Callback function to receive the result of the patchProprietarioItem operation.
   * @callback moduleapi/ProprietarioApi~patchProprietarioItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ProprietarioJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Updates the Proprietario resource.
   * Updates the Proprietario resource.
   * @param {module:model/Proprietario} body The updated Proprietario resource
   * @param {String} propid Resource identifier
   * @param {module:api/ProprietarioApi~patchProprietarioItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  patchProprietarioItem(body, propid, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling patchProprietarioItem"
      );
    }
    // verify the required parameter 'propid' is set
    if (propid === undefined || propid === null) {
      throw new Error(
        "Missing the required parameter 'propid' when calling patchProprietarioItem"
      );
    }

    let pathParams = {
      propid: propid,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/merge-patch+json"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = ProprietarioJsonld;

    return this.apiClient.callApi(
      "/api/proprietarios/{propid}",
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
   * Callback function to receive the result of the postProprietarioCollection operation.
   * @callback moduleapi/ProprietarioApi~postProprietarioCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ProprietarioJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a Proprietario resource.
   * Creates a Proprietario resource.
   * @param {module:model/ProprietarioJsonld} body The new Proprietario resource
   * @param {module:api/ProprietarioApi~postProprietarioCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  postProprietarioCollection(body, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling postProprietarioCollection"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = ProprietarioJsonld;

    return this.apiClient.callApi(
      "/api/proprietarios",
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
   * Callback function to receive the result of the putProprietarioItem operation.
   * @callback moduleapi/ProprietarioApi~putProprietarioItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ProprietarioJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Replaces the Proprietario resource.
   * Replaces the Proprietario resource.
   * @param {module:model/ProprietarioJsonld} body The updated Proprietario resource
   * @param {String} propid Resource identifier
   * @param {module:api/ProprietarioApi~putProprietarioItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  putProprietarioItem(body, propid, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling putProprietarioItem"
      );
    }
    // verify the required parameter 'propid' is set
    if (propid === undefined || propid === null) {
      throw new Error(
        "Missing the required parameter 'propid' when calling putProprietarioItem"
      );
    }

    let pathParams = {
      propid: propid,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = ProprietarioJsonld;

    return this.apiClient.callApi(
      "/api/proprietarios/{propid}",
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
