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

/**
 * The InlineResponse200HydrasearchHydramapping model module.
 * @module model/InlineResponse200HydrasearchHydramapping
 * @version 0.0.0
 */
export class InlineResponse200HydrasearchHydramapping {
  /**
   * Constructs a new <code>InlineResponse200HydrasearchHydramapping</code>.
   * @alias module:model/InlineResponse200HydrasearchHydramapping
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>InlineResponse200HydrasearchHydramapping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200HydrasearchHydramapping} obj Optional instance to populate.
   * @return {module:model/InlineResponse200HydrasearchHydramapping} The populated <code>InlineResponse200HydrasearchHydramapping</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200HydrasearchHydramapping();
      if (data.hasOwnProperty("@type"))
        obj.type = ApiClient.convertToType(data["@type"], "String");
      if (data.hasOwnProperty("variable"))
        obj.variable = ApiClient.convertToType(data["variable"], "String");
      if (data.hasOwnProperty("property"))
        obj.property = ApiClient.convertToType(data["property"], "String");
      if (data.hasOwnProperty("required"))
        obj.required = ApiClient.convertToType(data["required"], "Boolean");
    }
    return obj;
  }
}

/**
 * @member {String} type
 */
InlineResponse200HydrasearchHydramapping.prototype.type = undefined;

/**
 * @member {String} variable
 */
InlineResponse200HydrasearchHydramapping.prototype.variable = undefined;

/**
 * @member {String} property
 */
InlineResponse200HydrasearchHydramapping.prototype.property = undefined;

/**
 * @member {Boolean} required
 */
InlineResponse200HydrasearchHydramapping.prototype.required = undefined;
