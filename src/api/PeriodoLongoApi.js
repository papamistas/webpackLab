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
import { InlineResponse20011 } from "../model/InlineResponse20011";
import { PeriodoLongo } from "../model/PeriodoLongo";
import { PeriodoLongoJsonld } from "../model/PeriodoLongoJsonld";

/**
 * PeriodoLongo service.
 * @module api/PeriodoLongoApi
 * @version 0.0.0
 */
export class PeriodoLongoApi {
  /**
    * Constructs a new PeriodoLongoApi. 
    * @alias module:api/PeriodoLongoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the deletePeriodoLongoItem operation.
   * @callback moduleapi/PeriodoLongoApi~deletePeriodoLongoItemCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Removes the PeriodoLongo resource.
   * Removes the PeriodoLongo resource.
   * @param {String} id Resource identifier
   * @param {module:api/PeriodoLongoApi~deletePeriodoLongoItemCallback} callback The callback function, accepting three arguments: error, data, response
   */
  deletePeriodoLongoItem(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling deletePeriodoLongoItem"
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
      "/api/periodo_longos/{id}",
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
   * Callback function to receive the result of the getPeriodoLongoCollection operation.
   * @callback moduleapi/PeriodoLongoApi~getPeriodoLongoCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse20011{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves the collection of PeriodoLongo resources.
   * Retrieves the collection of PeriodoLongo resources.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to <.>)
   * @param {module:api/PeriodoLongoApi~getPeriodoLongoCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getPeriodoLongoCollection(opts, callback) {
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
    let returnType = InlineResponse20011;

    return this.apiClient.callApi(
      "/api/periodo_longos",
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
   * Callback function to receive the result of the getPeriodoLongoItem operation.
   * @callback moduleapi/PeriodoLongoApi~getPeriodoLongoItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PeriodoLongoJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves a PeriodoLongo resource.
   * Retrieves a PeriodoLongo resource.
   * @param {String} id Resource identifier
   * @param {module:api/PeriodoLongoApi~getPeriodoLongoItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getPeriodoLongoItem(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling getPeriodoLongoItem"
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
    let returnType = PeriodoLongoJsonld;

    return this.apiClient.callApi(
      "/api/periodo_longos/{id}",
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
   * Callback function to receive the result of the patchPeriodoLongoItem operation.
   * @callback moduleapi/PeriodoLongoApi~patchPeriodoLongoItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PeriodoLongoJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Updates the PeriodoLongo resource.
   * Updates the PeriodoLongo resource.
   * @param {module:model/PeriodoLongo} body The updated PeriodoLongo resource
   * @param {String} id Resource identifier
   * @param {module:api/PeriodoLongoApi~patchPeriodoLongoItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  patchPeriodoLongoItem(body, id, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling patchPeriodoLongoItem"
      );
    }
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling patchPeriodoLongoItem"
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
    let returnType = PeriodoLongoJsonld;

    return this.apiClient.callApi(
      "/api/periodo_longos/{id}",
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
   * Callback function to receive the result of the postPeriodoLongoCollection operation.
   * @callback moduleapi/PeriodoLongoApi~postPeriodoLongoCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PeriodoLongoJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a PeriodoLongo resource.
   * Creates a PeriodoLongo resource.
   * @param {module:model/PeriodoLongoJsonld} body The new PeriodoLongo resource
   * @param {module:api/PeriodoLongoApi~postPeriodoLongoCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  postPeriodoLongoCollection(body, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling postPeriodoLongoCollection"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = PeriodoLongoJsonld;

    return this.apiClient.callApi(
      "/api/periodo_longos",
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
   * Callback function to receive the result of the putPeriodoLongoItem operation.
   * @callback moduleapi/PeriodoLongoApi~putPeriodoLongoItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PeriodoLongoJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Replaces the PeriodoLongo resource.
   * Replaces the PeriodoLongo resource.
   * @param {module:model/PeriodoLongoJsonld} body The updated PeriodoLongo resource
   * @param {String} id Resource identifier
   * @param {module:api/PeriodoLongoApi~putPeriodoLongoItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  putPeriodoLongoItem(body, id, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling putPeriodoLongoItem"
      );
    }
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling putPeriodoLongoItem"
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
    let returnType = PeriodoLongoJsonld;

    return this.apiClient.callApi(
      "/api/periodo_longos/{id}",
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
