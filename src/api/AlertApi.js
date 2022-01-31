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
import { Alert } from "../model/Alert";
import { AlertJsonld } from "../model/AlertJsonld";
import { InlineResponse200 } from "../model/InlineResponse200";

/**
 * Alert service.
 * @module api/AlertApi
 * @version 0.0.0
 */
export class AlertApi {
  /**
    * Constructs a new AlertApi. 
    * @alias module:api/AlertApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the deleteAlertItem operation.
   * @callback moduleapi/AlertApi~deleteAlertItemCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Removes the Alert resource.
   * Removes the Alert resource.
   * @param {String} id Resource identifier
   * @param {module:api/AlertApi~deleteAlertItemCallback} callback The callback function, accepting three arguments: error, data, response
   */
  deleteAlertItem(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling deleteAlertItem"
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
      "/api/alerts/{id}",
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
   * Callback function to receive the result of the getAlertCollection operation.
   * @callback moduleapi/AlertApi~getAlertCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves the collection of Alert resources.
   * Retrieves the collection of Alert resources.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to <.>)
   * @param {module:api/AlertApi~getAlertCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getAlertCollection(opts, callback) {
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
    let returnType = InlineResponse200;

    return this.apiClient.callApi(
      "/api/alerts",
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
   * Callback function to receive the result of the getAlertItem operation.
   * @callback moduleapi/AlertApi~getAlertItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AlertJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves a Alert resource.
   * Retrieves a Alert resource.
   * @param {String} id Resource identifier
   * @param {module:api/AlertApi~getAlertItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getAlertItem(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling getAlertItem"
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
    let returnType = AlertJsonld;

    return this.apiClient.callApi(
      "/api/alerts/{id}",
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
   * Callback function to receive the result of the patchAlertItem operation.
   * @callback moduleapi/AlertApi~patchAlertItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AlertJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Updates the Alert resource.
   * Updates the Alert resource.
   * @param {module:model/Alert} body The updated Alert resource
   * @param {String} id Resource identifier
   * @param {module:api/AlertApi~patchAlertItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  patchAlertItem(body, id, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling patchAlertItem"
      );
    }
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling patchAlertItem"
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
    let returnType = AlertJsonld;

    return this.apiClient.callApi(
      "/api/alerts/{id}",
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
   * Callback function to receive the result of the postAlertCollection operation.
   * @callback moduleapi/AlertApi~postAlertCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AlertJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a Alert resource.
   * Creates a Alert resource.
   * @param {module:model/AlertJsonld} body The new Alert resource
   * @param {module:api/AlertApi~postAlertCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  postAlertCollection(body, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling postAlertCollection"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = AlertJsonld;

    return this.apiClient.callApi(
      "/api/alerts",
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
   * Callback function to receive the result of the putAlertItem operation.
   * @callback moduleapi/AlertApi~putAlertItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AlertJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Replaces the Alert resource.
   * Replaces the Alert resource.
   * @param {module:model/AlertJsonld} body The updated Alert resource
   * @param {String} id Resource identifier
   * @param {module:api/AlertApi~putAlertItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  putAlertItem(body, id, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling putAlertItem"
      );
    }
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling putAlertItem"
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
    let returnType = AlertJsonld;

    return this.apiClient.callApi(
      "/api/alerts/{id}",
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
