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
 * The Prereserva model module.
 * @module model/Prereserva
 * @version 0.0.0
 */
export class Prereserva {
  /**
   * Constructs a new <code>Prereserva</code>.
   * Prereserva
   * @alias module:model/Prereserva
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>Prereserva</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Prereserva} obj Optional instance to populate.
   * @return {module:model/Prereserva} The populated <code>Prereserva</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Prereserva();
      if (data.hasOwnProperty("casa"))
        obj.casa = ApiClient.convertToType(data["casa"], "String");
      if (data.hasOwnProperty("nPrereserva"))
        obj.nPrereserva = ApiClient.convertToType(
          data["nPrereserva"],
          "Number"
        );
      if (data.hasOwnProperty("data"))
        obj.data = ApiClient.convertToType(data["data"], "String");
      if (data.hasOwnProperty("expira"))
        obj.expira = ApiClient.convertToType(data["expira"], "String");
      if (data.hasOwnProperty("id"))
        obj.id = ApiClient.convertToType(data["id"], "String");
      if (data.hasOwnProperty("codCasa"))
        obj.codCasa = ApiClient.convertToType(data["codCasa"], "String");
      if (data.hasOwnProperty("nmMes"))
        obj.nmMes = ApiClient.convertToType(data["nmMes"], "String");
      if (data.hasOwnProperty("nSemana"))
        obj.nSemana = ApiClient.convertToType(data["nSemana"], "String");
      if (data.hasOwnProperty("inicio"))
        obj.inicio = ApiClient.convertToType(data["inicio"], "String");
      if (data.hasOwnProperty("fim"))
        obj.fim = ApiClient.convertToType(data["fim"], "String");
      if (data.hasOwnProperty("preco"))
        obj.preco = ApiClient.convertToType(data["preco"], "String");
      if (data.hasOwnProperty("quinzena"))
        obj.quinzena = ApiClient.convertToType(data["quinzena"], "String");
      if (data.hasOwnProperty("nome"))
        obj.nome = ApiClient.convertToType(data["nome"], "String");
      if (data.hasOwnProperty("morada"))
        obj.morada = ApiClient.convertToType(data["morada"], "String");
      if (data.hasOwnProperty("email"))
        obj.email = ApiClient.convertToType(data["email"], "String");
      if (data.hasOwnProperty("telefone"))
        obj.telefone = ApiClient.convertToType(data["telefone"], "String");
      if (data.hasOwnProperty("perguntas"))
        obj.perguntas = ApiClient.convertToType(data["perguntas"], "String");
      if (data.hasOwnProperty("sugestoes"))
        obj.sugestoes = ApiClient.convertToType(data["sugestoes"], "String");
      if (data.hasOwnProperty("comentarios"))
        obj.comentarios = ApiClient.convertToType(
          data["comentarios"],
          "String"
        );
      if (data.hasOwnProperty("situacao"))
        obj.situacao = ApiClient.convertToType(data["situacao"], "String");
      if (data.hasOwnProperty("formaPagamento"))
        obj.formaPagamento = ApiClient.convertToType(
          data["formaPagamento"],
          "Number"
        );
      if (data.hasOwnProperty("valor"))
        obj.valor = ApiClient.convertToType(data["valor"], "Number");
      if (data.hasOwnProperty("sessionid"))
        obj.sessionid = ApiClient.convertToType(data["sessionid"], "String");
      if (data.hasOwnProperty("voto"))
        obj.voto = ApiClient.convertToType(data["voto"], "Boolean");
    }
    return obj;
  }
}

/**
 * @member {String} casa
 */
Prereserva.prototype.casa = undefined;

/**
 * @member {Number} nPrereserva
 */
Prereserva.prototype.nPrereserva = undefined;

/**
 * @member {String} data
 * @default 'NULL'
 */
Prereserva.prototype.data = "NULL";

/**
 * @member {String} expira
 * @default 'NULL'
 */
Prereserva.prototype.expira = "NULL";

/**
 * @member {String} id
 * @default 'NULL'
 */
Prereserva.prototype.id = "NULL";

/**
 * @member {String} codCasa
 * @default 'NULL'
 */
Prereserva.prototype.codCasa = "NULL";

/**
 * @member {String} nmMes
 * @default 'NULL'
 */
Prereserva.prototype.nmMes = "NULL";

/**
 * @member {String} nSemana
 * @default 'NULL'
 */
Prereserva.prototype.nSemana = "NULL";

/**
 * @member {String} inicio
 * @default 'NULL'
 */
Prereserva.prototype.inicio = "NULL";

/**
 * @member {String} fim
 * @default 'NULL'
 */
Prereserva.prototype.fim = "NULL";

/**
 * @member {String} preco
 * @default 'NULL'
 */
Prereserva.prototype.preco = "NULL";

/**
 * @member {String} quinzena
 * @default 'NULL'
 */
Prereserva.prototype.quinzena = "NULL";

/**
 * @member {String} nome
 * @default 'NULL'
 */
Prereserva.prototype.nome = "NULL";

/**
 * @member {String} morada
 * @default 'NULL'
 */
Prereserva.prototype.morada = "NULL";

/**
 * @member {String} email
 * @default 'NULL'
 */
Prereserva.prototype.email = "NULL";

/**
 * @member {String} telefone
 * @default 'NULL'
 */
Prereserva.prototype.telefone = "NULL";

/**
 * @member {String} perguntas
 * @default 'NULL'
 */
Prereserva.prototype.perguntas = "NULL";

/**
 * @member {String} sugestoes
 * @default 'NULL'
 */
Prereserva.prototype.sugestoes = "NULL";

/**
 * @member {String} comentarios
 * @default 'NULL'
 */
Prereserva.prototype.comentarios = "NULL";

/**
 * @member {String} situacao
 * @default 'NULL'
 */
Prereserva.prototype.situacao = "NULL";

/**
 * @member {Number} formaPagamento
 */
Prereserva.prototype.formaPagamento = undefined;

/**
 * @member {Number} valor
 */
Prereserva.prototype.valor = undefined;

/**
 * @member {String} sessionid
 * @default 'NULL'
 */
Prereserva.prototype.sessionid = "NULL";

/**
 * @member {Boolean} voto
 * @default false
 */
Prereserva.prototype.voto = false;
