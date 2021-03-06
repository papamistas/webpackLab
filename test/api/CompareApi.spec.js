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
    instance = new SwaggerJsClient.CompareApi();
  });

  describe("(package)", function () {
    describe("CompareApi", function () {
      describe("deleteCompareItem", function () {
        it("should call deleteCompareItem successfully", function (done) {
          // TODO: uncomment, update parameter values for deleteCompareItem call
          /*

          instance.deleteCompareItem(id, function(error, data, response) {
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
      describe("getCompareCollection", function () {
        it("should call getCompareCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for getCompareCollection call and complete the assertions
          /*
          var opts = {};

          instance.getCompareCollection(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.InlineResponse2004);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("getCompareItem", function () {
        it("should call getCompareItem successfully", function (done) {
          // TODO: uncomment, update parameter values for getCompareItem call and complete the assertions
          /*

          instance.getCompareItem(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.CompareJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("patchCompareItem", function () {
        it("should call patchCompareItem successfully", function (done) {
          // TODO: uncomment, update parameter values for patchCompareItem call and complete the assertions
          /*

          instance.patchCompareItem(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.CompareJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("postCompareCollection", function () {
        it("should call postCompareCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for postCompareCollection call and complete the assertions
          /*

          instance.postCompareCollection(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.CompareJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("putCompareItem", function () {
        it("should call putCompareItem successfully", function (done) {
          // TODO: uncomment, update parameter values for putCompareItem call and complete the assertions
          /*

          instance.putCompareItem(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.CompareJsonld);

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
