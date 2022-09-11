const chaiTest = require("chai");
const server = require("../server");
// const assert = chai.assert;
const should = chaiTest.should();
// const expect = chai.expect;
const chaiHttp = require("chai-http");
chaiTest.use(chaiHttp);

describe("get places ", () => {
  it("should get all the nearby places", (done) => {
    chaiTest
      .request(server)
      .get("/api/getNearby/W112AQ")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("code");
        res.body.should.have.property("data");
        res.body.should.have.property("message");
        res.body.should.have
          .property("message")
          .eql("Restaurants fetched successfully");
        done();
      });
  });
});
describe("get places", () => {
  it("should give no nearby places", (done) => {
    chaiTest
      .request(server)
      .get("/api/getNearby/BA100EP")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("code");
        res.body.should.have.property("data");
        res.body.should.have.property("message");
        res.body.should.have
          .property("message")
          .eql("No nearby restaurants found");
        done();
      });
  });
});
describe("get places with incorrect zipcode", () => {
  it("should give incorrect zipcode error", (done) => {
    chaiTest
      .request(server)
      .get("/api/getNearby/abcxyz")
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a("object");
        res.body.should.have.property("status");
        res.body.should.have.property("error");
        res.body.should.have.property("error").eql("Invalid postcode");
        done();
      });
  });
});
