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
import { InlineResponse200Hydrasearch } from "./InlineResponse200Hydrasearch";
import { InlineResponse200Hydraview } from "./InlineResponse200Hydraview";
import { TipoAlojamentoJsonld } from "./TipoAlojamentoJsonld";

/**
 * The InlineResponse20021 model module.
 * @module model/InlineResponse20021
 * @version 0.0.0
 */
export class InlineResponse20021 {
  /**
   * Constructs a new <code>InlineResponse20021</code>.
   * @alias module:model/InlineResponse20021
   * @class
   * @param hydramember {Array.<module:model/TipoAlojamentoJsonld>}
   */
  constructor(hydramember) {
    this.hydramember = hydramember;
  }

  /**
   * Constructs a <code>InlineResponse20021</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20021} obj Optional instance to populate.
   * @return {module:model/InlineResponse20021} The populated <code>InlineResponse20021</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20021();
      if (data.hasOwnProperty("hydra:member"))
        obj.hydramember = ApiClient.convertToType(data["hydra:member"], [
          TipoAlojamentoJsonld,
        ]);
      if (data.hasOwnProperty("hydra:totalItems"))
        obj.hydratotalItems = ApiClient.convertToType(
          data["hydra:totalItems"],
          "Number"
        );
      if (data.hasOwnProperty("hydra:view"))
        obj.hydraview = InlineResponse200Hydraview.constructFromObject(
          data["hydra:view"]
        );
      if (data.hasOwnProperty("hydra:search"))
        obj.hydrasearch = InlineResponse200Hydrasearch.constructFromObject(
          data["hydra:search"]
        );
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/TipoAlojamentoJsonld>} hydramember
 */
InlineResponse20021.prototype.hydramember = undefined;

/**
 * @member {Number} hydratotalItems
 */
InlineResponse20021.prototype.hydratotalItems = undefined;

/**
 * @member {module:model/InlineResponse200Hydraview} hydraview
 */
InlineResponse20021.prototype.hydraview = undefined;

/**
 * @member {module:model/InlineResponse200Hydrasearch} hydrasearch
 */
InlineResponse20021.prototype.hydrasearch = undefined;
