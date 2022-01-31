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
    describe("InlineResponse200HydrasearchHydramapping", function () {
      beforeEach(function () {
        instance =
          new SwaggerJsClient.InlineResponse200HydrasearchHydramapping();
      });

      it("should create an instance of InlineResponse200HydrasearchHydramapping", function () {
        // TODO: update the code to test InlineResponse200HydrasearchHydramapping
        expect(instance).to.be.a(
          SwaggerJsClient.InlineResponse200HydrasearchHydramapping
        );
      });

      it('should have the property type (base name: "@type")', function () {
        // TODO: update the code to test the property type
        expect(instance).to.have.property("type");
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property variable (base name: "variable")', function () {
        // TODO: update the code to test the property variable
        expect(instance).to.have.property("variable");
        // expect(instance.variable).to.be(expectedValueLiteral);
      });

      it('should have the property property (base name: "property")', function () {
        // TODO: update the code to test the property property
        expect(instance).to.have.property("property");
        // expect(instance.property).to.be(expectedValueLiteral);
      });

      it('should have the property required (base name: "required")', function () {
        // TODO: update the code to test the property required
        expect(instance).to.have.property("required");
        // expect(instance.required).to.be(expectedValueLiteral);
      });
    });
  });
});