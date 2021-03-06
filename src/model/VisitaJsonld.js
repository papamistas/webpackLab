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
 * The VisitaJsonld model module.
 * @module model/VisitaJsonld
 * @version 0.0.0
 */
export class VisitaJsonld {
  /**
   * Constructs a new <code>VisitaJsonld</code>.
   * Visita
   * @alias module:model/VisitaJsonld
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>VisitaJsonld</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VisitaJsonld} obj Optional instance to populate.
   * @return {module:model/VisitaJsonld} The populated <code>VisitaJsonld</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VisitaJsonld();
      if (data.hasOwnProperty("@context"))
        obj.context = ApiClient.convertToType(data["@context"], Object);
      if (data.hasOwnProperty("@id"))
        obj.id = ApiClient.convertToType(data["@id"], "String");
      if (data.hasOwnProperty("@type"))
        obj.type = ApiClient.convertToType(data["@type"], "String");
      if (data.hasOwnProperty("id"))
        obj.id = ApiClient.convertToType(data["id"], "Number");
      if (data.hasOwnProperty("cliente"))
        obj.cliente = ApiClient.convertToType(data["cliente"], "Number");
      if (data.hasOwnProperty("codCasa"))
        obj.codCasa = ApiClient.convertToType(data["codCasa"], "Number");
      if (data.hasOwnProperty("data"))
        obj.data = ApiClient.convertToType(data["data"], "String");
      if (data.hasOwnProperty("hora"))
        obj.hora = ApiClient.convertToType(data["hora"], "String");
    }
    return obj;
  }
}

/**
 * @member {Object} context
 */
VisitaJsonld.prototype.context = undefined;

/**
 * @member {String} id
 */
VisitaJsonld.prototype.id = undefined;

/**
 * @member {String} type
 */
VisitaJsonld.prototype.type = undefined;

/**
 * @member {Number} id
 */
VisitaJsonld.prototype.id = undefined;

/**
 * @member {Number} cliente
 */
VisitaJsonld.prototype.cliente = undefined;

/**
 * @member {Number} codCasa
 */
VisitaJsonld.prototype.codCasa = undefined;

/**
 * @member {String} data
 */
VisitaJsonld.prototype.data = undefined;

/**
 * @member {String} hora
 */
VisitaJsonld.prototype.hora = undefined;
