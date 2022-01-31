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
    instance = new SwaggerJsClient.PrecoApi();
  });

  describe("(package)", function () {
    describe("PrecoApi", function () {
      describe("deletePrecoItem", function () {
        it("should call deletePrecoItem successfully", function (done) {
          // TODO: uncomment, update parameter values for deletePrecoItem call
          /*

          instance.deletePrecoItem(id, function(error, data, response) {
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
      describe("getPrecoCollection", function () {
        it("should call getPrecoCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for getPrecoCollection call and complete the assertions
          /*
          var opts = {};

          instance.getPrecoCollection(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.InlineResponse20013);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("getPrecoItem", function () {
        it("should call getPrecoItem successfully", function (done) {
          // TODO: uncomment, update parameter values for getPrecoItem call and complete the assertions
          /*

          instance.getPrecoItem(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.PrecoJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("patchPrecoItem", function () {
        it("should call patchPrecoItem successfully", function (done) {
          // TODO: uncomment, update parameter values for patchPrecoItem call and complete the assertions
          /*

          instance.patchPrecoItem(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.PrecoJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("postPrecoCollection", function () {
        it("should call postPrecoCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for postPrecoCollection call and complete the assertions
          /*

          instance.postPrecoCollection(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.PrecoJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("putPrecoItem", function () {
        it("should call putPrecoItem successfully", function (done) {
          // TODO: uncomment, update parameter values for putPrecoItem call and complete the assertions
          /*

          instance.putPrecoItem(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.PrecoJsonld);

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