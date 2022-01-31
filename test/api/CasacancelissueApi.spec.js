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
    instance = new SwaggerJsClient.CasacancelissueApi();
  });

  describe("(package)", function () {
    describe("CasacancelissueApi", function () {
      describe("deleteCasacancelissueItem", function () {
        it("should call deleteCasacancelissueItem successfully", function (done) {
          // TODO: uncomment, update parameter values for deleteCasacancelissueItem call
          /*

          instance.deleteCasacancelissueItem(id, function(error, data, response) {
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
      describe("getCasacancelissueCollection", function () {
        it("should call getCasacancelissueCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for getCasacancelissueCollection call and complete the assertions
          /*
          var opts = {};

          instance.getCasacancelissueCollection(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.InlineResponse2001);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("getCasacancelissueItem", function () {
        it("should call getCasacancelissueItem successfully", function (done) {
          // TODO: uncomment, update parameter values for getCasacancelissueItem call and complete the assertions
          /*

          instance.getCasacancelissueItem(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.CasacancelissueJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("patchCasacancelissueItem", function () {
        it("should call patchCasacancelissueItem successfully", function (done) {
          // TODO: uncomment, update parameter values for patchCasacancelissueItem call and complete the assertions
          /*

          instance.patchCasacancelissueItem(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.CasacancelissueJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("postCasacancelissueCollection", function () {
        it("should call postCasacancelissueCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for postCasacancelissueCollection call and complete the assertions
          /*

          instance.postCasacancelissueCollection(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.CasacancelissueJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("putCasacancelissueItem", function () {
        it("should call putCasacancelissueItem successfully", function (done) {
          // TODO: uncomment, update parameter values for putCasacancelissueItem call and complete the assertions
          /*

          instance.putCasacancelissueItem(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.CasacancelissueJsonld);

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