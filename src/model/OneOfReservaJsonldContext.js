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
 * The OneOfReservaJsonldContext model module.
 * @module model/OneOfReservaJsonldContext
 * @version 0.0.0
 */
export class OneOfReservaJsonldContext {
  /**
   * Constructs a new <code>OneOfReservaJsonldContext</code>.
   * @alias module:model/OneOfReservaJsonldContext
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>OneOfReservaJsonldContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfReservaJsonldContext} obj Optional instance to populate.
   * @return {module:model/OneOfReservaJsonldContext} The populated <code>OneOfReservaJsonldContext</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfReservaJsonldContext();
    }
    return obj;
  }
}
