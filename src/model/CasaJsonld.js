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
 * The CasaJsonld model module.
 * @module model/CasaJsonld
 * @version 0.0.0
 */
export class CasaJsonld {
  /**
   * Constructs a new <code>CasaJsonld</code>.
   * Casa
   * @alias module:model/CasaJsonld
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>CasaJsonld</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CasaJsonld} obj Optional instance to populate.
   * @return {module:model/CasaJsonld} The populated <code>CasaJsonld</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CasaJsonld();
      if (data.hasOwnProperty("@context"))
        obj.context = ApiClient.convertToType(data["@context"], Object);
      if (data.hasOwnProperty("@id"))
        obj.id = ApiClient.convertToType(data["@id"], "String");
      if (data.hasOwnProperty("@type"))
        obj.type = ApiClient.convertToType(data["@type"], "String");
      if (data.hasOwnProperty("prereservas"))
        obj.prereservas = ApiClient.convertToType(data["prereservas"], [
          "String",
        ]);
      if (data.hasOwnProperty("owner"))
        obj.owner = ApiClient.convertToType(data["owner"], "String");
      if (data.hasOwnProperty("codCasa"))
        obj.codCasa = ApiClient.convertToType(data["codCasa"], "Number");
      if (data.hasOwnProperty("adicionado"))
        obj.adicionado = ApiClient.convertToType(data["adicionado"], "String");
      if (data.hasOwnProperty("dataActivo"))
        obj.dataActivo = ApiClient.convertToType(data["dataActivo"], "String");
      if (data.hasOwnProperty("destino"))
        obj.destino = ApiClient.convertToType(data["destino"], "String");
      if (data.hasOwnProperty("propid"))
        obj.propid = ApiClient.convertToType(data["propid"], "Number");
      if (data.hasOwnProperty("designacao"))
        obj.designacao = ApiClient.convertToType(data["designacao"], "String");
      if (data.hasOwnProperty("tipoalojamento"))
        obj.tipoalojamento = ApiClient.convertToType(
          data["tipoalojamento"],
          "String"
        );
      if (data.hasOwnProperty("tipo"))
        obj.tipo = ApiClient.convertToType(data["tipo"], "String");
      if (data.hasOwnProperty("pessoas"))
        obj.pessoas = ApiClient.convertToType(data["pessoas"], "Number");
      if (data.hasOwnProperty("pais"))
        obj.pais = ApiClient.convertToType(data["pais"], "String");
      if (data.hasOwnProperty("distrito"))
        obj.distrito = ApiClient.convertToType(data["distrito"], "String");
      if (data.hasOwnProperty("endereco"))
        obj.endereco = ApiClient.convertToType(data["endereco"], "String");
      if (data.hasOwnProperty("codpostal"))
        obj.codpostal = ApiClient.convertToType(data["codpostal"], "String");
      if (data.hasOwnProperty("area"))
        obj.area = ApiClient.convertToType(data["area"], "String");
      if (data.hasOwnProperty("lat"))
        obj.lat = ApiClient.convertToType(data["lat"], "String");
      if (data.hasOwnProperty("lng"))
        obj.lng = ApiClient.convertToType(data["lng"], "String");
      if (data.hasOwnProperty("altitude"))
        obj.altitude = ApiClient.convertToType(data["altitude"], "String");
      if (data.hasOwnProperty("localidade"))
        obj.localidade = ApiClient.convertToType(data["localidade"], "String");
      if (data.hasOwnProperty("distCentro"))
        obj.distCentro = ApiClient.convertToType(data["distCentro"], "String");
      if (data.hasOwnProperty("distPraia"))
        obj.distPraia = ApiClient.convertToType(data["distPraia"], "String");
      if (data.hasOwnProperty("piscina"))
        obj.piscina = ApiClient.convertToType(data["piscina"], "Boolean");
      if (data.hasOwnProperty("televisao"))
        obj.televisao = ApiClient.convertToType(data["televisao"], "Boolean");
      if (data.hasOwnProperty("arCondicionado"))
        obj.arCondicionado = ApiClient.convertToType(
          data["arCondicionado"],
          "Boolean"
        );
      if (data.hasOwnProperty("img1"))
        obj.img1 = ApiClient.convertToType(data["img1"], "String");
      if (data.hasOwnProperty("img2"))
        obj.img2 = ApiClient.convertToType(data["img2"], "String");
      if (data.hasOwnProperty("img3"))
        obj.img3 = ApiClient.convertToType(data["img3"], "String");
      if (data.hasOwnProperty("img4"))
        obj.img4 = ApiClient.convertToType(data["img4"], "String");
      if (data.hasOwnProperty("img5"))
        obj.img5 = ApiClient.convertToType(data["img5"], "String");
      if (data.hasOwnProperty("img6"))
        obj.img6 = ApiClient.convertToType(data["img6"], "String");
      if (data.hasOwnProperty("img7"))
        obj.img7 = ApiClient.convertToType(data["img7"], "String");
      if (data.hasOwnProperty("img8"))
        obj.img8 = ApiClient.convertToType(data["img8"], "String");
      if (data.hasOwnProperty("img9"))
        obj.img9 = ApiClient.convertToType(data["img9"], "String");
      if (data.hasOwnProperty("img10"))
        obj.img10 = ApiClient.convertToType(data["img10"], "String");
      if (data.hasOwnProperty("quartos"))
        obj.quartos = ApiClient.convertToType(data["quartos"], "Number");
      if (data.hasOwnProperty("camascasal"))
        obj.camascasal = ApiClient.convertToType(data["camascasal"], "Number");
      if (data.hasOwnProperty("camassingle"))
        obj.camassingle = ApiClient.convertToType(
          data["camassingle"],
          "Number"
        );
      if (data.hasOwnProperty("casasbanho"))
        obj.casasbanho = ApiClient.convertToType(data["casasbanho"], "Number");
      if (data.hasOwnProperty("golf"))
        obj.golf = ApiClient.convertToType(data["golf"], "Boolean");
      if (data.hasOwnProperty("tenis"))
        obj.tenis = ApiClient.convertToType(data["tenis"], "Boolean");
      if (data.hasOwnProperty("pesca"))
        obj.pesca = ApiClient.convertToType(data["pesca"], "Boolean");
      if (data.hasOwnProperty("natacao"))
        obj.natacao = ApiClient.convertToType(data["natacao"], "Boolean");
      if (data.hasOwnProperty("bowling"))
        obj.bowling = ApiClient.convertToType(data["bowling"], "Boolean");
      if (data.hasOwnProperty("casino"))
        obj.casino = ApiClient.convertToType(data["casino"], "Boolean");
      if (data.hasOwnProperty("cinema"))
        obj.cinema = ApiClient.convertToType(data["cinema"], "Boolean");
      if (data.hasOwnProperty("discoteca"))
        obj.discoteca = ApiClient.convertToType(data["discoteca"], "Boolean");
      if (data.hasOwnProperty("outrasActividprox"))
        obj.outrasActividprox = ApiClient.convertToType(
          data["outrasActividprox"],
          "String"
        );
      if (data.hasOwnProperty("roupascama"))
        obj.roupascama = ApiClient.convertToType(data["roupascama"], "Boolean");
      if (data.hasOwnProperty("roupasbanho"))
        obj.roupasbanho = ApiClient.convertToType(
          data["roupasbanho"],
          "Boolean"
        );
      if (data.hasOwnProperty("limpeza"))
        obj.limpeza = ApiClient.convertToType(data["limpeza"], "Boolean");
      if (data.hasOwnProperty("utilcozinha"))
        obj.utilcozinha = ApiClient.convertToType(
          data["utilcozinha"],
          "Boolean"
        );
      if (data.hasOwnProperty("fogao"))
        obj.fogao = ApiClient.convertToType(data["fogao"], "Boolean");
      if (data.hasOwnProperty("frigorif"))
        obj.frigorif = ApiClient.convertToType(data["frigorif"], "Boolean");
      if (data.hasOwnProperty("congel"))
        obj.congel = ApiClient.convertToType(data["congel"], "Boolean");
      if (data.hasOwnProperty("forno"))
        obj.forno = ApiClient.convertToType(data["forno"], "Boolean");
      if (data.hasOwnProperty("barbecue"))
        obj.barbecue = ApiClient.convertToType(data["barbecue"], "Boolean");
      if (data.hasOwnProperty("microndas"))
        obj.microndas = ApiClient.convertToType(data["microndas"], "Boolean");
      if (data.hasOwnProperty("mlavaloica"))
        obj.mlavaloica = ApiClient.convertToType(data["mlavaloica"], "Boolean");
      if (data.hasOwnProperty("mlavaroupa"))
        obj.mlavaroupa = ApiClient.convertToType(data["mlavaroupa"], "Boolean");
      if (data.hasOwnProperty("aqcentral"))
        obj.aqcentral = ApiClient.convertToType(data["aqcentral"], "Boolean");
      if (data.hasOwnProperty("satcabo"))
        obj.satcabo = ApiClient.convertToType(data["satcabo"], "Boolean");
      if (data.hasOwnProperty("internet"))
        obj.internet = ApiClient.convertToType(data["internet"], "Boolean");
      if (data.hasOwnProperty("outrosServicos"))
        obj.outrosServicos = ApiClient.convertToType(
          data["outrosServicos"],
          "String"
        );
      if (data.hasOwnProperty("linkInfo"))
        obj.linkInfo = ApiClient.convertToType(data["linkInfo"], "String");
      if (data.hasOwnProperty("linkDispon"))
        obj.linkDispon = ApiClient.convertToType(data["linkDispon"], "String");
      if (data.hasOwnProperty("activo"))
        obj.activo = ApiClient.convertToType(data["activo"], "Boolean");
      if (data.hasOwnProperty("sessid"))
        obj.sessid = ApiClient.convertToType(data["sessid"], "String");
      if (data.hasOwnProperty("promo"))
        obj.promo = ApiClient.convertToType(data["promo"], "Boolean");
      if (data.hasOwnProperty("certif"))
        obj.certif = ApiClient.convertToType(data["certif"], "Boolean");
      if (data.hasOwnProperty("dataAct"))
        obj.dataAct = ApiClient.convertToType(data["dataAct"], "String");
      if (data.hasOwnProperty("titulo"))
        obj.titulo = ApiClient.convertToType(data["titulo"], "String");
      if (data.hasOwnProperty("qtspecialoffer"))
        obj.qtspecialoffer = ApiClient.convertToType(
          data["qtspecialoffer"],
          "Number"
        );
      if (data.hasOwnProperty("fengomar"))
        obj.fengomar = ApiClient.convertToType(data["fengomar"], "Boolean");
      if (data.hasOwnProperty("estacionamento"))
        obj.estacionamento = ApiClient.convertToType(
          data["estacionamento"],
          "Boolean"
        );
      if (data.hasOwnProperty("telefone"))
        obj.telefone = ApiClient.convertToType(data["telefone"], "Boolean");
      if (data.hasOwnProperty("despertador"))
        obj.despertador = ApiClient.convertToType(
          data["despertador"],
          "Boolean"
        );
      if (data.hasOwnProperty("dvd"))
        obj.dvd = ApiClient.convertToType(data["dvd"], "Boolean");
      if (data.hasOwnProperty("torradeira"))
        obj.torradeira = ApiClient.convertToType(data["torradeira"], "Boolean");
      if (data.hasOwnProperty("animais"))
        obj.animais = ApiClient.convertToType(data["animais"], "Boolean");
      if (data.hasOwnProperty("fumadores"))
        obj.fumadores = ApiClient.convertToType(data["fumadores"], "Boolean");
      if (data.hasOwnProperty("caucao"))
        obj.caucao = ApiClient.convertToType(data["caucao"], "Boolean");
      if (data.hasOwnProperty("valorcaucao"))
        obj.valorcaucao = ApiClient.convertToType(
          data["valorcaucao"],
          "String"
        );
      if (data.hasOwnProperty("deficientes"))
        obj.deficientes = ApiClient.convertToType(
          data["deficientes"],
          "String"
        );
      if (data.hasOwnProperty("concelho"))
        obj.concelho = ApiClient.convertToType(data["concelho"], "String");
      if (data.hasOwnProperty("altImg1"))
        obj.altImg1 = ApiClient.convertToType(data["altImg1"], "String");
      if (data.hasOwnProperty("forSale"))
        obj.forSale = ApiClient.convertToType(data["forSale"], "Boolean");
      if (data.hasOwnProperty("forRent"))
        obj.forRent = ApiClient.convertToType(data["forRent"], "Boolean");
      if (data.hasOwnProperty("forArrenda"))
        obj.forArrenda = ApiClient.convertToType(data["forArrenda"], "Boolean");
      if (data.hasOwnProperty("valorArrendamento"))
        obj.valorArrendamento = ApiClient.convertToType(
          data["valorArrendamento"],
          "Number"
        );
      if (data.hasOwnProperty("valorVenda"))
        obj.valorVenda = ApiClient.convertToType(data["valorVenda"], "Number");
      if (data.hasOwnProperty("certifEnerg"))
        obj.certifEnerg = ApiClient.convertToType(
          data["certifEnerg"],
          "Boolean"
        );
      if (data.hasOwnProperty("certifEnergLevel"))
        obj.certifEnergLevel = ApiClient.convertToType(
          data["certifEnergLevel"],
          "String"
        );
      if (data.hasOwnProperty("seoTitle"))
        obj.seoTitle = ApiClient.convertToType(data["seoTitle"], "String");
      if (data.hasOwnProperty("ano"))
        obj.ano = ApiClient.convertToType(data["ano"], "Number");
    }
    return obj;
  }
}

/**
 * @member {Object} context
 */
CasaJsonld.prototype.context = undefined;

/**
 * @member {String} id
 */
CasaJsonld.prototype.id = undefined;

/**
 * @member {String} type
 */
CasaJsonld.prototype.type = undefined;

/**
 * @member {Array.<String>} prereservas
 */
CasaJsonld.prototype.prereservas = undefined;

/**
 * @member {String} owner
 */
CasaJsonld.prototype.owner = undefined;

/**
 * @member {Number} codCasa
 */
CasaJsonld.prototype.codCasa = undefined;

/**
 * @member {String} adicionado
 * @default 'NULL'
 */
CasaJsonld.prototype.adicionado = "NULL";

/**
 * @member {String} dataActivo
 * @default 'NULL'
 */
CasaJsonld.prototype.dataActivo = "NULL";

/**
 * @member {String} destino
 * @default 'NULL'
 */
CasaJsonld.prototype.destino = "NULL";

/**
 * @member {Number} propid
 */
CasaJsonld.prototype.propid = undefined;

/**
 * @member {String} designacao
 * @default 'NULL'
 */
CasaJsonld.prototype.designacao = "NULL";

/**
 * @member {String} tipoalojamento
 * @default 'NULL'
 */
CasaJsonld.prototype.tipoalojamento = "NULL";

/**
 * @member {String} tipo
 * @default 'NULL'
 */
CasaJsonld.prototype.tipo = "NULL";

/**
 * @member {Number} pessoas
 */
CasaJsonld.prototype.pessoas = undefined;

/**
 * @member {String} pais
 * @default 'NULL'
 */
CasaJsonld.prototype.pais = "NULL";

/**
 * @member {String} distrito
 * @default 'NULL'
 */
CasaJsonld.prototype.distrito = "NULL";

/**
 * @member {String} endereco
 * @default 'NULL'
 */
CasaJsonld.prototype.endereco = "NULL";

/**
 * @member {String} codpostal
 * @default 'NULL'
 */
CasaJsonld.prototype.codpostal = "NULL";

/**
 * @member {String} area
 * @default 'NULL'
 */
CasaJsonld.prototype.area = "NULL";

/**
 * @member {String} lat
 * @default 'NULL'
 */
CasaJsonld.prototype.lat = "NULL";

/**
 * @member {String} lng
 * @default 'NULL'
 */
CasaJsonld.prototype.lng = "NULL";

/**
 * @member {String} altitude
 * @default 'NULL'
 */
CasaJsonld.prototype.altitude = "NULL";

/**
 * @member {String} localidade
 * @default 'NULL'
 */
CasaJsonld.prototype.localidade = "NULL";

/**
 * @member {String} distCentro
 * @default 'NULL'
 */
CasaJsonld.prototype.distCentro = "NULL";

/**
 * @member {String} distPraia
 * @default 'NULL'
 */
CasaJsonld.prototype.distPraia = "NULL";

/**
 * @member {Boolean} piscina
 * @default false
 */
CasaJsonld.prototype.piscina = false;

/**
 * @member {Boolean} televisao
 * @default false
 */
CasaJsonld.prototype.televisao = false;

/**
 * @member {Boolean} arCondicionado
 * @default false
 */
CasaJsonld.prototype.arCondicionado = false;

/**
 * @member {String} img1
 * @default 'images/noimage.jpg'
 */
CasaJsonld.prototype.img1 = "images/noimage.jpg";

/**
 * @member {String} img2
 * @default 'images/noimage.jpg'
 */
CasaJsonld.prototype.img2 = "images/noimage.jpg";

/**
 * @member {String} img3
 * @default 'images/noimage.jpg'
 */
CasaJsonld.prototype.img3 = "images/noimage.jpg";

/**
 * @member {String} img4
 * @default 'images/noimage.jpg'
 */
CasaJsonld.prototype.img4 = "images/noimage.jpg";

/**
 * @member {String} img5
 * @default 'images/noimage.jpg'
 */
CasaJsonld.prototype.img5 = "images/noimage.jpg";

/**
 * @member {String} img6
 * @default 'images/noimage.jpg'
 */
CasaJsonld.prototype.img6 = "images/noimage.jpg";

/**
 * @member {String} img7
 * @default 'images/noimage.jpg'
 */
CasaJsonld.prototype.img7 = "images/noimage.jpg";

/**
 * @member {String} img8
 * @default 'images/noimage.jpg'
 */
CasaJsonld.prototype.img8 = "images/noimage.jpg";

/**
 * @member {String} img9
 * @default 'images/noimage.jpg'
 */
CasaJsonld.prototype.img9 = "images/noimage.jpg";

/**
 * @member {String} img10
 * @default 'images/noimage.jpg'
 */
CasaJsonld.prototype.img10 = "images/noimage.jpg";

/**
 * @member {Number} quartos
 */
CasaJsonld.prototype.quartos = undefined;

/**
 * @member {Number} camascasal
 */
CasaJsonld.prototype.camascasal = undefined;

/**
 * @member {Number} camassingle
 */
CasaJsonld.prototype.camassingle = undefined;

/**
 * @member {Number} casasbanho
 */
CasaJsonld.prototype.casasbanho = undefined;

/**
 * @member {Boolean} golf
 * @default false
 */
CasaJsonld.prototype.golf = false;

/**
 * @member {Boolean} tenis
 * @default false
 */
CasaJsonld.prototype.tenis = false;

/**
 * @member {Boolean} pesca
 * @default false
 */
CasaJsonld.prototype.pesca = false;

/**
 * @member {Boolean} natacao
 * @default false
 */
CasaJsonld.prototype.natacao = false;

/**
 * @member {Boolean} bowling
 * @default false
 */
CasaJsonld.prototype.bowling = false;

/**
 * @member {Boolean} casino
 * @default false
 */
CasaJsonld.prototype.casino = false;

/**
 * @member {Boolean} cinema
 * @default false
 */
CasaJsonld.prototype.cinema = false;

/**
 * @member {Boolean} discoteca
 * @default false
 */
CasaJsonld.prototype.discoteca = false;

/**
 * @member {String} outrasActividprox
 * @default 'NULL'
 */
CasaJsonld.prototype.outrasActividprox = "NULL";

/**
 * @member {Boolean} roupascama
 * @default false
 */
CasaJsonld.prototype.roupascama = false;

/**
 * @member {Boolean} roupasbanho
 * @default false
 */
CasaJsonld.prototype.roupasbanho = false;

/**
 * @member {Boolean} limpeza
 * @default false
 */
CasaJsonld.prototype.limpeza = false;

/**
 * @member {Boolean} utilcozinha
 * @default false
 */
CasaJsonld.prototype.utilcozinha = false;

/**
 * @member {Boolean} fogao
 * @default false
 */
CasaJsonld.prototype.fogao = false;

/**
 * @member {Boolean} frigorif
 * @default false
 */
CasaJsonld.prototype.frigorif = false;

/**
 * @member {Boolean} congel
 * @default false
 */
CasaJsonld.prototype.congel = false;

/**
 * @member {Boolean} forno
 * @default false
 */
CasaJsonld.prototype.forno = false;

/**
 * @member {Boolean} barbecue
 * @default false
 */
CasaJsonld.prototype.barbecue = false;

/**
 * @member {Boolean} microndas
 * @default false
 */
CasaJsonld.prototype.microndas = false;

/**
 * @member {Boolean} mlavaloica
 * @default false
 */
CasaJsonld.prototype.mlavaloica = false;

/**
 * @member {Boolean} mlavaroupa
 * @default false
 */
CasaJsonld.prototype.mlavaroupa = false;

/**
 * @member {Boolean} aqcentral
 * @default false
 */
CasaJsonld.prototype.aqcentral = false;

/**
 * @member {Boolean} satcabo
 * @default false
 */
CasaJsonld.prototype.satcabo = false;

/**
 * @member {Boolean} internet
 * @default false
 */
CasaJsonld.prototype.internet = false;

/**
 * @member {String} outrosServicos
 * @default 'NULL'
 */
CasaJsonld.prototype.outrosServicos = "NULL";

/**
 * @member {String} linkInfo
 * @default 'NULL'
 */
CasaJsonld.prototype.linkInfo = "NULL";

/**
 * @member {String} linkDispon
 * @default 'NULL'
 */
CasaJsonld.prototype.linkDispon = "NULL";

/**
 * @member {Boolean} activo
 * @default false
 */
CasaJsonld.prototype.activo = false;

/**
 * @member {String} sessid
 * @default 'NULL'
 */
CasaJsonld.prototype.sessid = "NULL";

/**
 * @member {Boolean} promo
 * @default false
 */
CasaJsonld.prototype.promo = false;

/**
 * @member {Boolean} certif
 * @default false
 */
CasaJsonld.prototype.certif = false;

/**
 * @member {String} dataAct
 * @default 'NULL'
 */
CasaJsonld.prototype.dataAct = "NULL";

/**
 * @member {String} titulo
 * @default 'NULL'
 */
CasaJsonld.prototype.titulo = "NULL";

/**
 * @member {Number} qtspecialoffer
 */
CasaJsonld.prototype.qtspecialoffer = undefined;

/**
 * @member {Boolean} fengomar
 * @default false
 */
CasaJsonld.prototype.fengomar = false;

/**
 * @member {Boolean} estacionamento
 * @default false
 */
CasaJsonld.prototype.estacionamento = false;

/**
 * @member {Boolean} telefone
 * @default false
 */
CasaJsonld.prototype.telefone = false;

/**
 * @member {Boolean} despertador
 * @default false
 */
CasaJsonld.prototype.despertador = false;

/**
 * @member {Boolean} dvd
 * @default false
 */
CasaJsonld.prototype.dvd = false;

/**
 * @member {Boolean} torradeira
 * @default false
 */
CasaJsonld.prototype.torradeira = false;

/**
 * @member {Boolean} animais
 * @default false
 */
CasaJsonld.prototype.animais = false;

/**
 * @member {Boolean} fumadores
 * @default false
 */
CasaJsonld.prototype.fumadores = false;

/**
 * @member {Boolean} caucao
 * @default false
 */
CasaJsonld.prototype.caucao = false;

/**
 * @member {String} valorcaucao
 * @default 'NULL'
 */
CasaJsonld.prototype.valorcaucao = "NULL";

/**
 * @member {String} deficientes
 * @default 'NULL'
 */
CasaJsonld.prototype.deficientes = "NULL";

/**
 * @member {String} concelho
 * @default 'NULL'
 */
CasaJsonld.prototype.concelho = "NULL";

/**
 * @member {String} altImg1
 * @default 'NULL'
 */
CasaJsonld.prototype.altImg1 = "NULL";

/**
 * @member {Boolean} forSale
 */
CasaJsonld.prototype.forSale = undefined;

/**
 * @member {Boolean} forRent
 */
CasaJsonld.prototype.forRent = undefined;

/**
 * @member {Boolean} forArrenda
 */
CasaJsonld.prototype.forArrenda = undefined;

/**
 * @member {Number} valorArrendamento
 */
CasaJsonld.prototype.valorArrendamento = undefined;

/**
 * @member {Number} valorVenda
 */
CasaJsonld.prototype.valorVenda = undefined;

/**
 * @member {Boolean} certifEnerg
 */
CasaJsonld.prototype.certifEnerg = undefined;

/**
 * @member {String} certifEnergLevel
 */
CasaJsonld.prototype.certifEnergLevel = undefined;

/**
 * @member {String} seoTitle
 */
CasaJsonld.prototype.seoTitle = undefined;

/**
 * @member {Number} ano
 */
CasaJsonld.prototype.ano = undefined;
