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
import { Feedbackcoment } from "../model/Feedbackcoment";
import { FeedbackcomentJsonld } from "../model/FeedbackcomentJsonld";
import { InlineResponse2008 } from "../model/InlineResponse2008";

/**
 * Feedbackcoment service.
 * @module api/FeedbackcomentApi
 * @version 0.0.0
 */
export class FeedbackcomentApi {
  /**
    * Constructs a new FeedbackcomentApi. 
    * @alias module:api/FeedbackcomentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the deleteFeedbackcomentItem operation.
   * @callback moduleapi/FeedbackcomentApi~deleteFeedbackcomentItemCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Removes the Feedbackcoment resource.
   * Removes the Feedbackcoment resource.
   * @param {String} id Resource identifier
   * @param {module:api/FeedbackcomentApi~deleteFeedbackcomentItemCallback} callback The callback function, accepting three arguments: error, data, response
   */
  deleteFeedbackcomentItem(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling deleteFeedbackcomentItem"
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
      "/api/feedbackcoments/{id}",
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
   * Callback function to receive the result of the getFeedbackcomentCollection operation.
   * @callback moduleapi/FeedbackcomentApi~getFeedbackcomentCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2008{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves the collection of Feedbackcoment resources.
   * Retrieves the collection of Feedbackcoment resources.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to <.>)
   * @param {module:api/FeedbackcomentApi~getFeedbackcomentCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getFeedbackcomentCollection(opts, callback) {
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
    let returnType = InlineResponse2008;

    return this.apiClient.callApi(
      "/api/feedbackcoments",
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
   * Callback function to receive the result of the getFeedbackcomentItem operation.
   * @callback moduleapi/FeedbackcomentApi~getFeedbackcomentItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/FeedbackcomentJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves a Feedbackcoment resource.
   * Retrieves a Feedbackcoment resource.
   * @param {String} id Resource identifier
   * @param {module:api/FeedbackcomentApi~getFeedbackcomentItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getFeedbackcomentItem(id, callback) {
    let postBody = null;
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling getFeedbackcomentItem"
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
    let returnType = FeedbackcomentJsonld;

    return this.apiClient.callApi(
      "/api/feedbackcoments/{id}",
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
   * Callback function to receive the result of the patchFeedbackcomentItem operation.
   * @callback moduleapi/FeedbackcomentApi~patchFeedbackcomentItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/FeedbackcomentJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Updates the Feedbackcoment resource.
   * Updates the Feedbackcoment resource.
   * @param {module:model/Feedbackcoment} body The updated Feedbackcoment resource
   * @param {String} id Resource identifier
   * @param {module:api/FeedbackcomentApi~patchFeedbackcomentItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  patchFeedbackcomentItem(body, id, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling patchFeedbackcomentItem"
      );
    }
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling patchFeedbackcomentItem"
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
    let returnType = FeedbackcomentJsonld;

    return this.apiClient.callApi(
      "/api/feedbackcoments/{id}",
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
   * Callback function to receive the result of the postFeedbackcomentCollection operation.
   * @callback moduleapi/FeedbackcomentApi~postFeedbackcomentCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/FeedbackcomentJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a Feedbackcoment resource.
   * Creates a Feedbackcoment resource.
   * @param {module:model/FeedbackcomentJsonld} body The new Feedbackcoment resource
   * @param {module:api/FeedbackcomentApi~postFeedbackcomentCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  postFeedbackcomentCollection(body, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling postFeedbackcomentCollection"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = FeedbackcomentJsonld;

    return this.apiClient.callApi(
      "/api/feedbackcoments",
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
   * Callback function to receive the result of the putFeedbackcomentItem operation.
   * @callback moduleapi/FeedbackcomentApi~putFeedbackcomentItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/FeedbackcomentJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Replaces the Feedbackcoment resource.
   * Replaces the Feedbackcoment resource.
   * @param {module:model/FeedbackcomentJsonld} body The updated Feedbackcoment resource
   * @param {String} id Resource identifier
   * @param {module:api/FeedbackcomentApi~putFeedbackcomentItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  putFeedbackcomentItem(body, id, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling putFeedbackcomentItem"
      );
    }
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error(
        "Missing the required parameter 'id' when calling putFeedbackcomentItem"
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
    let returnType = FeedbackcomentJsonld;

    return this.apiClient.callApi(
      "/api/feedbackcoments/{id}",
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
