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
    describe("Tipo", function () {
      beforeEach(function () {
        instance = new SwaggerJsClient.Tipo();
      });

      it("should create an instance of Tipo", function () {
        // TODO: update the code to test Tipo
        expect(instance).to.be.a(SwaggerJsClient.Tipo);
      });

      it('should have the property idTipo (base name: "idTipo")', function () {
        // TODO: update the code to test the property idTipo
        expect(instance).to.have.property("idTipo");
        // expect(instance.idTipo).to.be(expectedValueLiteral);
      });

      it('should have the property tipo (base name: "tipo")', function () {
        // TODO: update the code to test the property tipo
        expect(instance).to.have.property("tipo");
        // expect(instance.tipo).to.be(expectedValueLiteral);
      });
    });
  });
});
