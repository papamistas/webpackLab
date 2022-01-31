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
 * The PeriodoJsonld model module.
 * @module model/PeriodoJsonld
 * @version 0.0.0
 */
export class PeriodoJsonld {
  /**
   * Constructs a new <code>PeriodoJsonld</code>.
   * Periodo
   * @alias module:model/PeriodoJsonld
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>PeriodoJsonld</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PeriodoJsonld} obj Optional instance to populate.
   * @return {module:model/PeriodoJsonld} The populated <code>PeriodoJsonld</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PeriodoJsonld();
      if (data.hasOwnProperty("@context"))
        obj.context = ApiClient.convertToType(data["@context"], Object);
      if (data.hasOwnProperty("@id"))
        obj.id = ApiClient.convertToType(data["@id"], "String");
      if (data.hasOwnProperty("@type"))
        obj.type = ApiClient.convertToType(data["@type"], "String");
      if (data.hasOwnProperty("id"))
        obj.id = ApiClient.convertToType(data["id"], "Number");
      if (data.hasOwnProperty("codCasa"))
        obj.codCasa = ApiClient.convertToType(data["codCasa"], "Number");
      if (data.hasOwnProperty("inicio"))
        obj.inicio = ApiClient.convertToType(data["inicio"], "String");
      if (data.hasOwnProperty("fim"))
        obj.fim = ApiClient.convertToType(data["fim"], "String");
      if (data.hasOwnProperty("precoSemana"))
        obj.precoSemana = ApiClient.convertToType(
          data["precoSemana"],
          "String"
        );
      if (data.hasOwnProperty("precoDia"))
        obj.precoDia = ApiClient.convertToType(data["precoDia"], "String");
      if (data.hasOwnProperty("precoFimsemana"))
        obj.precoFimsemana = ApiClient.convertToType(
          data["precoFimsemana"],
          "String"
        );
      if (data.hasOwnProperty("estadiaMinima"))
        obj.estadiaMinima = ApiClient.convertToType(
          data["estadiaMinima"],
          "String"
        );
      if (data.hasOwnProperty("descricao"))
        obj.descricao = ApiClient.convertToType(data["descricao"], "String");
      if (data.hasOwnProperty("observacoes"))
        obj.observacoes = ApiClient.convertToType(
          data["observacoes"],
          "String"
        );
    }
    return obj;
  }
}

/**
 * @member {Object} context
 */
PeriodoJsonld.prototype.context = undefined;

/**
 * @member {String} id
 */
PeriodoJsonld.prototype.id = undefined;

/**
 * @member {String} type
 */
PeriodoJsonld.prototype.type = undefined;

/**
 * @member {Number} id
 */
PeriodoJsonld.prototype.id = undefined;

/**
 * @member {Number} codCasa
 */
PeriodoJsonld.prototype.codCasa = undefined;

/**
 * @member {String} inicio
 */
PeriodoJsonld.prototype.inicio = undefined;

/**
 * @member {String} fim
 */
PeriodoJsonld.prototype.fim = undefined;

/**
 * @member {String} precoSemana
 */
PeriodoJsonld.prototype.precoSemana = undefined;

/**
 * @member {String} precoDia
 */
PeriodoJsonld.prototype.precoDia = undefined;

/**
 * @member {String} precoFimsemana
 */
PeriodoJsonld.prototype.precoFimsemana = undefined;

/**
 * @member {String} estadiaMinima
 */
PeriodoJsonld.prototype.estadiaMinima = undefined;

/**
 * @member {String} descricao
 * @default 'NULL'
 */
PeriodoJsonld.prototype.descricao = "NULL";

/**
 * @member {String} observacoes
 */
PeriodoJsonld.prototype.observacoes = undefined;
