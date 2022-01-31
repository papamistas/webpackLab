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
 * The ClienteJsonld model module.
 * @module model/ClienteJsonld
 * @version 0.0.0
 */
export class ClienteJsonld {
  /**
   * Constructs a new <code>ClienteJsonld</code>.
   * Cliente
   * @alias module:model/ClienteJsonld
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>ClienteJsonld</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClienteJsonld} obj Optional instance to populate.
   * @return {module:model/ClienteJsonld} The populated <code>ClienteJsonld</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClienteJsonld();
      if (data.hasOwnProperty("@context"))
        obj.context = ApiClient.convertToType(data["@context"], Object);
      if (data.hasOwnProperty("@id"))
        obj.id = ApiClient.convertToType(data["@id"], "String");
      if (data.hasOwnProperty("@type"))
        obj.type = ApiClient.convertToType(data["@type"], "String");
      if (data.hasOwnProperty("clienteid"))
        obj.clienteid = ApiClient.convertToType(data["clienteid"], "Number");
      if (data.hasOwnProperty("cliente"))
        obj.cliente = ApiClient.convertToType(data["cliente"], "String");
      if (data.hasOwnProperty("senha"))
        obj.senha = ApiClient.convertToType(data["senha"], "String");
      if (data.hasOwnProperty("senhaRepeat"))
        obj.senhaRepeat = ApiClient.convertToType(
          data["senhaRepeat"],
          "String"
        );
      if (data.hasOwnProperty("salt"))
        obj.salt = ApiClient.convertToType(data["salt"], "String");
      if (data.hasOwnProperty("telefone"))
        obj.telefone = ApiClient.convertToType(data["telefone"], "String");
      if (data.hasOwnProperty("email"))
        obj.email = ApiClient.convertToType(data["email"], "String");
      if (data.hasOwnProperty("morada"))
        obj.morada = ApiClient.convertToType(data["morada"], "String");
      if (data.hasOwnProperty("codPostal"))
        obj.codPostal = ApiClient.convertToType(data["codPostal"], "String");
      if (data.hasOwnProperty("localidade"))
        obj.localidade = ApiClient.convertToType(data["localidade"], "String");
      if (data.hasOwnProperty("conflito1"))
        obj.conflito1 = ApiClient.convertToType(data["conflito1"], "String");
      if (data.hasOwnProperty("conflito2"))
        obj.conflito2 = ApiClient.convertToType(data["conflito2"], "String");
      if (data.hasOwnProperty("conflito3"))
        obj.conflito3 = ApiClient.convertToType(data["conflito3"], "String");
      if (data.hasOwnProperty("sessid"))
        obj.sessid = ApiClient.convertToType(data["sessid"], "String");
      if (data.hasOwnProperty("activo"))
        obj.activo = ApiClient.convertToType(data["activo"], "Boolean");
      if (data.hasOwnProperty("pais"))
        obj.pais = ApiClient.convertToType(data["pais"], "String");
      if (data.hasOwnProperty("subscribeNewsletter"))
        obj.subscribeNewsletter = ApiClient.convertToType(
          data["subscribeNewsletter"],
          "Boolean"
        );
      if (data.hasOwnProperty("facebookAccount"))
        obj.facebookAccount = ApiClient.convertToType(
          data["facebookAccount"],
          "Boolean"
        );
      if (data.hasOwnProperty("fbId"))
        obj.fbId = ApiClient.convertToType(data["fbId"], "String");
    }
    return obj;
  }
}

/**
 * @member {Object} context
 */
ClienteJsonld.prototype.context = undefined;

/**
 * @member {String} id
 */
ClienteJsonld.prototype.id = undefined;

/**
 * @member {String} type
 */
ClienteJsonld.prototype.type = undefined;

/**
 * @member {Number} clienteid
 */
ClienteJsonld.prototype.clienteid = undefined;

/**
 * @member {String} cliente
 */
ClienteJsonld.prototype.cliente = undefined;

/**
 * @member {String} senha
 */
ClienteJsonld.prototype.senha = undefined;

/**
 * @member {String} senhaRepeat
 */
ClienteJsonld.prototype.senhaRepeat = undefined;

/**
 * @member {String} salt
 * @default 'NULL'
 */
ClienteJsonld.prototype.salt = "NULL";

/**
 * @member {String} telefone
 */
ClienteJsonld.prototype.telefone = undefined;

/**
 * @member {String} email
 */
ClienteJsonld.prototype.email = undefined;

/**
 * @member {String} morada
 */
ClienteJsonld.prototype.morada = undefined;

/**
 * @member {String} codPostal
 */
ClienteJsonld.prototype.codPostal = undefined;

/**
 * @member {String} localidade
 */
ClienteJsonld.prototype.localidade = undefined;

/**
 * @member {String} conflito1
 * @default 'NULL'
 */
ClienteJsonld.prototype.conflito1 = "NULL";

/**
 * @member {String} conflito2
 * @default 'NULL'
 */
ClienteJsonld.prototype.conflito2 = "NULL";

/**
 * @member {String} conflito3
 * @default 'NULL'
 */
ClienteJsonld.prototype.conflito3 = "NULL";

/**
 * @member {String} sessid
 * @default 'NULL'
 */
ClienteJsonld.prototype.sessid = "NULL";

/**
 * @member {Boolean} activo
 */
ClienteJsonld.prototype.activo = undefined;

/**
 * @member {String} pais
 */
ClienteJsonld.prototype.pais = undefined;

/**
 * @member {Boolean} subscribeNewsletter
 */
ClienteJsonld.prototype.subscribeNewsletter = undefined;

/**
 * @member {Boolean} facebookAccount
 */
ClienteJsonld.prototype.facebookAccount = undefined;

/**
 * @member {String} fbId
 */
ClienteJsonld.prototype.fbId = undefined;
