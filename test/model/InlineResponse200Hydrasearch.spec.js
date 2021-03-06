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
    describe("InlineResponse200Hydrasearch", function () {
      beforeEach(function () {
        instance = new SwaggerJsClient.InlineResponse200Hydrasearch();
      });

      it("should create an instance of InlineResponse200Hydrasearch", function () {
        // TODO: update the code to test InlineResponse200Hydrasearch
        expect(instance).to.be.a(SwaggerJsClient.InlineResponse200Hydrasearch);
      });

      it('should have the property type (base name: "@type")', function () {
        // TODO: update the code to test the property type
        expect(instance).to.have.property("type");
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property hydratemplate (base name: "hydra:template")', function () {
        // TODO: update the code to test the property hydratemplate
        expect(instance).to.have.property("hydratemplate");
        // expect(instance.hydratemplate).to.be(expectedValueLiteral);
      });

      it('should have the property hydravariableRepresentation (base name: "hydra:variableRepresentation")', function () {
        // TODO: update the code to test the property hydravariableRepresentation
        expect(instance).to.have.property("hydravariableRepresentation");
        // expect(instance.hydravariableRepresentation).to.be(expectedValueLiteral);
      });

      it('should have the property hydramapping (base name: "hydra:mapping")', function () {
        // TODO: update the code to test the property hydramapping
        expect(instance).to.have.property("hydramapping");
        // expect(instance.hydramapping).to.be(expectedValueLiteral);
      });
    });
  });
});
