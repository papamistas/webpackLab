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
import { ReservaStateJsonld } from "./ReservaStateJsonld";

/**
 * The InlineResponse20018 model module.
 * @module model/InlineResponse20018
 * @version 0.0.0
 */
export class InlineResponse20018 {
  /**
   * Constructs a new <code>InlineResponse20018</code>.
   * @alias module:model/InlineResponse20018
   * @class
   * @param hydramember {Array.<module:model/ReservaStateJsonld>}
   */
  constructor(hydramember) {
    this.hydramember = hydramember;
  }

  /**
   * Constructs a <code>InlineResponse20018</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20018} obj Optional instance to populate.
   * @return {module:model/InlineResponse20018} The populated <code>InlineResponse20018</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20018();
      if (data.hasOwnProperty("hydra:member"))
        obj.hydramember = ApiClient.convertToType(data["hydra:member"], [
          ReservaStateJsonld,
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
 * @member {Array.<module:model/ReservaStateJsonld>} hydramember
 */
InlineResponse20018.prototype.hydramember = undefined;

/**
 * @member {Number} hydratotalItems
 */
InlineResponse20018.prototype.hydratotalItems = undefined;

/**
 * @member {module:model/InlineResponse200Hydraview} hydraview
 */
InlineResponse20018.prototype.hydraview = undefined;

/**
 * @member {module:model/InlineResponse200Hydrasearch} hydrasearch
 */
InlineResponse20018.prototype.hydrasearch = undefined;
