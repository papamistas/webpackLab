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
 * The OneOfMessageJsonldContext model module.
 * @module model/OneOfMessageJsonldContext
 * @version 0.0.0
 */
export class OneOfMessageJsonldContext {
  /**
   * Constructs a new <code>OneOfMessageJsonldContext</code>.
   * @alias module:model/OneOfMessageJsonldContext
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>OneOfMessageJsonldContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfMessageJsonldContext} obj Optional instance to populate.
   * @return {module:model/OneOfMessageJsonldContext} The populated <code>OneOfMessageJsonldContext</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfMessageJsonldContext();
    }
    return obj;
  }
}
