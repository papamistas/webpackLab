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
 * The Destino model module.
 * @module model/Destino
 * @version 0.0.0
 */
export class Destino {
  /**
   * Constructs a new <code>Destino</code>.
   * Destino
   * @alias module:model/Destino
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>Destino</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Destino} obj Optional instance to populate.
   * @return {module:model/Destino} The populated <code>Destino</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Destino();
      if (data.hasOwnProperty("idDestino"))
        obj.idDestino = ApiClient.convertToType(data["idDestino"], "Number");
      if (data.hasOwnProperty("destino"))
        obj.destino = ApiClient.convertToType(data["destino"], "String");
    }
    return obj;
  }
}

/**
 * @member {Number} idDestino
 */
Destino.prototype.idDestino = undefined;

/**
 * @member {String} destino
 */
Destino.prototype.destino = undefined;