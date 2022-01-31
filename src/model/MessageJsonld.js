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
 * The MessageJsonld model module.
 * @module model/MessageJsonld
 * @version 0.0.0
 */
export class MessageJsonld {
  /**
   * Constructs a new <code>MessageJsonld</code>.
   * Message
   * @alias module:model/MessageJsonld
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>MessageJsonld</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageJsonld} obj Optional instance to populate.
   * @return {module:model/MessageJsonld} The populated <code>MessageJsonld</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MessageJsonld();
      if (data.hasOwnProperty("@context"))
        obj.context = ApiClient.convertToType(data["@context"], Object);
      if (data.hasOwnProperty("@id"))
        obj.id = ApiClient.convertToType(data["@id"], "String");
      if (data.hasOwnProperty("@type"))
        obj.type = ApiClient.convertToType(data["@type"], "String");
      if (data.hasOwnProperty("language"))
        obj.language = ApiClient.convertToType(data["language"], "String");
      if (data.hasOwnProperty("translation"))
        obj.translation = ApiClient.convertToType(
          data["translation"],
          "String"
        );
      if (data.hasOwnProperty("id"))
        obj.id = ApiClient.convertToType(data["id"], "String");
    }
    return obj;
  }
}

/**
 * @member {Object} context
 */
MessageJsonld.prototype.context = undefined;

/**
 * @member {String} id
 */
MessageJsonld.prototype.id = undefined;

/**
 * @member {String} type
 */
MessageJsonld.prototype.type = undefined;

/**
 * @member {String} language
 * @default ''
 */
MessageJsonld.prototype.language = "";

/**
 * @member {String} translation
 * @default 'NULL'
 */
MessageJsonld.prototype.translation = "NULL";

/**
 * @member {String} id
 */
MessageJsonld.prototype.id = undefined;
