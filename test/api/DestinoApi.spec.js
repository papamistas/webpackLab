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
    instance = new SwaggerJsClient.DestinoApi();
  });

  describe("(package)", function () {
    describe("DestinoApi", function () {
      describe("deleteDestinoItem", function () {
        it("should call deleteDestinoItem successfully", function (done) {
          // TODO: uncomment, update parameter values for deleteDestinoItem call
          /*

          instance.deleteDestinoItem(idDestino, function(error, data, response) {
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
      describe("getDestinoCollection", function () {
        it("should call getDestinoCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for getDestinoCollection call and complete the assertions
          /*
          var opts = {};

          instance.getDestinoCollection(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.InlineResponse2005);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("getDestinoItem", function () {
        it("should call getDestinoItem successfully", function (done) {
          // TODO: uncomment, update parameter values for getDestinoItem call and complete the assertions
          /*

          instance.getDestinoItem(idDestino, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.DestinoJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("patchDestinoItem", function () {
        it("should call patchDestinoItem successfully", function (done) {
          // TODO: uncomment, update parameter values for patchDestinoItem call and complete the assertions
          /*

          instance.patchDestinoItem(body, idDestino, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.DestinoJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("postDestinoCollection", function () {
        it("should call postDestinoCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for postDestinoCollection call and complete the assertions
          /*

          instance.postDestinoCollection(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.DestinoJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("putDestinoItem", function () {
        it("should call putDestinoItem successfully", function (done) {
          // TODO: uncomment, update parameter values for putDestinoItem call and complete the assertions
          /*

          instance.putDestinoItem(body, idDestino, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.DestinoJsonld);

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
