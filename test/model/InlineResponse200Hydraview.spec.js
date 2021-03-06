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
    describe("InlineResponse200Hydraview", function () {
      beforeEach(function () {
        instance = new SwaggerJsClient.InlineResponse200Hydraview();
      });

      it("should create an instance of InlineResponse200Hydraview", function () {
        // TODO: update the code to test InlineResponse200Hydraview
        expect(instance).to.be.a(SwaggerJsClient.InlineResponse200Hydraview);
      });

      it('should have the property id (base name: "@id")', function () {
        // TODO: update the code to test the property id
        expect(instance).to.have.property("id");
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "@type")', function () {
        // TODO: update the code to test the property type
        expect(instance).to.have.property("type");
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property hydrafirst (base name: "hydra:first")', function () {
        // TODO: update the code to test the property hydrafirst
        expect(instance).to.have.property("hydrafirst");
        // expect(instance.hydrafirst).to.be(expectedValueLiteral);
      });

      it('should have the property hydralast (base name: "hydra:last")', function () {
        // TODO: update the code to test the property hydralast
        expect(instance).to.have.property("hydralast");
        // expect(instance.hydralast).to.be(expectedValueLiteral);
      });

      it('should have the property hydraprevious (base name: "hydra:previous")', function () {
        // TODO: update the code to test the property hydraprevious
        expect(instance).to.have.property("hydraprevious");
        // expect(instance.hydraprevious).to.be(expectedValueLiteral);
      });

      it('should have the property hydranext (base name: "hydra:next")', function () {
        // TODO: update the code to test the property hydranext
        expect(instance).to.have.property("hydranext");
        // expect(instance.hydranext).to.be(expectedValueLiteral);
      });
    });
  });
});
