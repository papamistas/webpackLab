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
 * The PeriodoLongo model module.
 * @module model/PeriodoLongo
 * @version 0.0.0
 */
export class PeriodoLongo {
  /**
   * Constructs a new <code>PeriodoLongo</code>.
   * PeriodoLongo
   * @alias module:model/PeriodoLongo
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>PeriodoLongo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PeriodoLongo} obj Optional instance to populate.
   * @return {module:model/PeriodoLongo} The populated <code>PeriodoLongo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PeriodoLongo();
      if (data.hasOwnProperty("id"))
        obj.id = ApiClient.convertToType(data["id"], "Number");
      if (data.hasOwnProperty("inicio"))
        obj.inicio = ApiClient.convertToType(data["inicio"], "String");
      if (data.hasOwnProperty("fim"))
        obj.fim = ApiClient.convertToType(data["fim"], "String");
      if (data.hasOwnProperty("precoMes"))
        obj.precoMes = ApiClient.convertToType(data["precoMes"], "Number");
      if (data.hasOwnProperty("estadiaMinima"))
        obj.estadiaMinima = ApiClient.convertToType(
          data["estadiaMinima"],
          "String"
        );
      if (data.hasOwnProperty("codCasa"))
        obj.codCasa = ApiClient.convertToType(data["codCasa"], "String");
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
PeriodoLongo.prototype.id = undefined;

/**
 * @member {String} inicio
 */
PeriodoLongo.prototype.inicio = undefined;

/**
 * @member {String} fim
 */
PeriodoLongo.prototype.fim = undefined;

/**
 * @member {Number} precoMes
 */
PeriodoLongo.prototype.precoMes = undefined;

/**
 * @member {String} estadiaMinima
 */
PeriodoLongo.prototype.estadiaMinima = undefined;

/**
 * @member {String} codCasa
 */
PeriodoLongo.prototype.codCasa = undefined;
