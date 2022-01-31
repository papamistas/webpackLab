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
    instance = new SwaggerJsClient.ReservaPaymentApi();
  });

  describe("(package)", function () {
    describe("ReservaPaymentApi", function () {
      describe("deleteReservaPaymentItem", function () {
        it("should call deleteReservaPaymentItem successfully", function (done) {
          // TODO: uncomment, update parameter values for deleteReservaPaymentItem call
          /*

          instance.deleteReservaPaymentItem(id, function(error, data, response) {
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
      describe("getReservaPaymentCollection", function () {
        it("should call getReservaPaymentCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for getReservaPaymentCollection call and complete the assertions
          /*
          var opts = {};

          instance.getReservaPaymentCollection(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.InlineResponse20017);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("getReservaPaymentItem", function () {
        it("should call getReservaPaymentItem successfully", function (done) {
          // TODO: uncomment, update parameter values for getReservaPaymentItem call and complete the assertions
          /*

          instance.getReservaPaymentItem(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.ReservaPaymentJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("patchReservaPaymentItem", function () {
        it("should call patchReservaPaymentItem successfully", function (done) {
          // TODO: uncomment, update parameter values for patchReservaPaymentItem call and complete the assertions
          /*

          instance.patchReservaPaymentItem(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.ReservaPaymentJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("postReservaPaymentCollection", function () {
        it("should call postReservaPaymentCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for postReservaPaymentCollection call and complete the assertions
          /*

          instance.postReservaPaymentCollection(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.ReservaPaymentJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("putReservaPaymentItem", function () {
        it("should call putReservaPaymentItem successfully", function (done) {
          // TODO: uncomment, update parameter values for putReservaPaymentItem call and complete the assertions
          /*

          instance.putReservaPaymentItem(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.ReservaPaymentJsonld);

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
