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
import { InlineResponse200HydrasearchHydramapping } from "./InlineResponse200HydrasearchHydramapping";

/**
 * The InlineResponse200Hydrasearch model module.
 * @module model/InlineResponse200Hydrasearch
 * @version 0.0.0
 */
export class InlineResponse200Hydrasearch {
  /**
   * Constructs a new <code>InlineResponse200Hydrasearch</code>.
   * @alias module:model/InlineResponse200Hydrasearch
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>InlineResponse200Hydrasearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200Hydrasearch} obj Optional instance to populate.
   * @return {module:model/InlineResponse200Hydrasearch} The populated <code>InlineResponse200Hydrasearch</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200Hydrasearch();
      if (data.hasOwnProperty("@type"))
        obj.type = ApiClient.convertToType(data["@type"], "String");
      if (data.hasOwnProperty("hydra:template"))
        obj.hydratemplate = ApiClient.convertToType(
          data["hydra:template"],
          "String"
        );
      if (data.hasOwnProperty("hydra:variableRepresentation"))
        obj.hydravariableRepresentation = ApiClient.convertToType(
          data["hydra:variableRepresentation"],
          "String"
        );
      if (data.hasOwnProperty("hydra:mapping"))
        obj.hydramapping = ApiClient.convertToType(data["hydra:mapping"], [
          InlineResponse200HydrasearchHydramapping,
        ]);
    }
    return obj;
  }
}

/**
 * @member {String} type
 */
InlineResponse200Hydrasearch.prototype.type = undefined;

/**
 * @member {String} hydratemplate
 */
InlineResponse200Hydrasearch.prototype.hydratemplate = undefined;

/**
 * @member {String} hydravariableRepresentation
 */
InlineResponse200Hydrasearch.prototype.hydravariableRepresentation = undefined;

/**
 * @member {Array.<module:model/InlineResponse200HydrasearchHydramapping>} hydramapping
 */
InlineResponse200Hydrasearch.prototype.hydramapping = undefined;
