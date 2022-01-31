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
    describe("AlertJsonld", function () {
      beforeEach(function () {
        instance = new SwaggerJsClient.AlertJsonld();
      });

      it("should create an instance of AlertJsonld", function () {
        // TODO: update the code to test AlertJsonld
        expect(instance).to.be.a(SwaggerJsClient.AlertJsonld);
      });

      it('should have the property context (base name: "@context")', function () {
        // TODO: update the code to test the property context
        expect(instance).to.have.property("context");
        // expect(instance.context).to.be(expectedValueLiteral);
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

      it('should have the property id (base name: "id")', function () {
        // TODO: update the code to test the property id
        expect(instance).to.have.property("id");
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property idCliente (base name: "idCliente")', function () {
        // TODO: update the code to test the property idCliente
        expect(instance).to.have.property("idCliente");
        // expect(instance.idCliente).to.be(expectedValueLiteral);
      });

      it('should have the property idTipoAlojamento (base name: "idTipoAlojamento")', function () {
        // TODO: update the code to test the property idTipoAlojamento
        expect(instance).to.have.property("idTipoAlojamento");
        // expect(instance.idTipoAlojamento).to.be(expectedValueLiteral);
      });

      it('should have the property idTipo (base name: "idTipo")', function () {
        // TODO: update the code to test the property idTipo
        expect(instance).to.have.property("idTipo");
        // expect(instance.idTipo).to.be(expectedValueLiteral);
      });

      it('should have the property valor (base name: "valor")', function () {
        // TODO: update the code to test the property valor
        expect(instance).to.have.property("valor");
        // expect(instance.valor).to.be(expectedValueLiteral);
      });

      it('should have the property pessoas (base name: "pessoas")', function () {
        // TODO: update the code to test the property pessoas
        expect(instance).to.have.property("pessoas");
        // expect(instance.pessoas).to.be(expectedValueLiteral);
      });

      it('should have the property destino (base name: "destino")', function () {
        // TODO: update the code to test the property destino
        expect(instance).to.have.property("destino");
        // expect(instance.destino).to.be(expectedValueLiteral);
      });

      it('should have the property forRent (base name: "forRent")', function () {
        // TODO: update the code to test the property forRent
        expect(instance).to.have.property("forRent");
        // expect(instance.forRent).to.be(expectedValueLiteral);
      });

      it('should have the property forSale (base name: "forSale")', function () {
        // TODO: update the code to test the property forSale
        expect(instance).to.have.property("forSale");
        // expect(instance.forSale).to.be(expectedValueLiteral);
      });

      it('should have the property forArrenda (base name: "forArrenda")', function () {
        // TODO: update the code to test the property forArrenda
        expect(instance).to.have.property("forArrenda");
        // expect(instance.forArrenda).to.be(expectedValueLiteral);
      });

      it('should have the property valorArrenda (base name: "valorArrenda")', function () {
        // TODO: update the code to test the property valorArrenda
        expect(instance).to.have.property("valorArrenda");
        // expect(instance.valorArrenda).to.be(expectedValueLiteral);
      });

      it('should have the property valorVenda (base name: "valorVenda")', function () {
        // TODO: update the code to test the property valorVenda
        expect(instance).to.have.property("valorVenda");
        // expect(instance.valorVenda).to.be(expectedValueLiteral);
      });

      it('should have the property valorRent (base name: "valorRent")', function () {
        // TODO: update the code to test the property valorRent
        expect(instance).to.have.property("valorRent");
        // expect(instance.valorRent).to.be(expectedValueLiteral);
      });

      it('should have the property inicio (base name: "inicio")', function () {
        // TODO: update the code to test the property inicio
        expect(instance).to.have.property("inicio");
        // expect(instance.inicio).to.be(expectedValueLiteral);
      });

      it('should have the property fim (base name: "fim")', function () {
        // TODO: update the code to test the property fim
        expect(instance).to.have.property("fim");
        // expect(instance.fim).to.be(expectedValueLiteral);
      });
    });
  });
});
