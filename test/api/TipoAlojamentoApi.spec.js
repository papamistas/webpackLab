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

  beforeEach(function () {
    instance = new SwaggerJsClient.TipoAlojamentoApi();
  });

  describe("(package)", function () {
    describe("TipoAlojamentoApi", function () {
      describe("deleteTipoAlojamentoItem", function () {
        it("should call deleteTipoAlojamentoItem successfully", function (done) {
          // TODO: uncomment, update parameter values for deleteTipoAlojamentoItem call
          /*

          instance.deleteTipoAlojamentoItem(idTipoAlojamento, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("getTipoAlojamentoCollection", function () {
        it("should call getTipoAlojamentoCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for getTipoAlojamentoCollection call and complete the assertions
          /*
          var opts = {};

          instance.getTipoAlojamentoCollection(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.InlineResponse20021);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("getTipoAlojamentoItem", function () {
        it("should call getTipoAlojamentoItem successfully", function (done) {
          // TODO: uncomment, update parameter values for getTipoAlojamentoItem call and complete the assertions
          /*

          instance.getTipoAlojamentoItem(idTipoAlojamento, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.TipoAlojamentoJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("patchTipoAlojamentoItem", function () {
        it("should call patchTipoAlojamentoItem successfully", function (done) {
          // TODO: uncomment, update parameter values for patchTipoAlojamentoItem call and complete the assertions
          /*

          instance.patchTipoAlojamentoItem(body, idTipoAlojamento, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.TipoAlojamentoJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("postTipoAlojamentoCollection", function () {
        it("should call postTipoAlojamentoCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for postTipoAlojamentoCollection call and complete the assertions
          /*

          instance.postTipoAlojamentoCollection(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.TipoAlojamentoJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("putTipoAlojamentoItem", function () {
        it("should call putTipoAlojamentoItem successfully", function (done) {
          // TODO: uncomment, update parameter values for putTipoAlojamentoItem call and complete the assertions
          /*

          instance.putTipoAlojamentoItem(body, idTipoAlojamento, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.TipoAlojamentoJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });
});
