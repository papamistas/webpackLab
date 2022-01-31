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
    describe("Compare", function () {
      beforeEach(function () {
        instance = new SwaggerJsClient.Compare();
      });

      it("should create an instance of Compare", function () {
        // TODO: update the code to test Compare
        expect(instance).to.be.a(SwaggerJsClient.Compare);
      });

      it('should have the property id (base name: "id")', function () {
        // TODO: update the code to test the property id
        expect(instance).to.have.property("id");
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property codCasa (base name: "codCasa")', function () {
        // TODO: update the code to test the property codCasa
        expect(instance).to.have.property("codCasa");
        // expect(instance.codCasa).to.be(expectedValueLiteral);
      });

      it('should have the property mylistcol (base name: "mylistcol")', function () {
        // TODO: update the code to test the property mylistcol
        expect(instance).to.have.property("mylistcol");
        // expect(instance.mylistcol).to.be(expectedValueLiteral);
      });

      it('should have the property sessid (base name: "sessid")', function () {
        // TODO: update the code to test the property sessid
        expect(instance).to.have.property("sessid");
        // expect(instance.sessid).to.be(expectedValueLiteral);
      });

      it('should have the property cliente (base name: "cliente")', function () {
        // TODO: update the code to test the property cliente
        expect(instance).to.have.property("cliente");
        // expect(instance.cliente).to.be(expectedValueLiteral);
      });

      it('should have the property data (base name: "data")', function () {
        // TODO: update the code to test the property data
        expect(instance).to.have.property("data");
        // expect(instance.data).to.be(expectedValueLiteral);
      });
    });
  });
});
