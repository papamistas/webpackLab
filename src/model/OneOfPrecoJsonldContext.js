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
 * The OneOfPrecoJsonldContext model module.
 * @module model/OneOfPrecoJsonldContext
 * @version 0.0.0
 */
export class OneOfPrecoJsonldContext {
  /**
   * Constructs a new <code>OneOfPrecoJsonldContext</code>.
   * @alias module:model/OneOfPrecoJsonldContext
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>OneOfPrecoJsonldContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfPrecoJsonldContext} obj Optional instance to populate.
   * @return {module:model/OneOfPrecoJsonldContext} The populated <code>OneOfPrecoJsonldContext</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfPrecoJsonldContext();
    }
    return obj;
  }
}
