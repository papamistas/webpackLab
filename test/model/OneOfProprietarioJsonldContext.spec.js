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
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD.
    define(["expect.js", "../../src/index"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require("expect.js"), require("../../src/index"));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerJsClient);
  }
})(this, function (expect, SwaggerJsClient) {
  "use strict";

  var instance;

  describe("(package)", function () {
    describe("OneOfProprietarioJsonldContext", function () {
      beforeEach(function () {
        instance = new SwaggerJsClient.OneOfProprietarioJsonldContext();
      });

      it("should create an instance of OneOfProprietarioJsonldContext", function () {
        // TODO: update the code to test OneOfProprietarioJsonldContext
        expect(instance).to.be.a(
          SwaggerJsClient.OneOfProprietarioJsonldContext
        );
      });
    });
  });
});
