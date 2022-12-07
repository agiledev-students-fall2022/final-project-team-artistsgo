const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const should =chai.should();
const app = require("../App");

const baseUrl = "http://localhost:3001"


describe("test api get requests", () => {
    
    it("should get all products", function (done) {
        chai.request(app)
            .get("/product")
            .end((err, res) => {
                res.body.should.have.property("author_username")
                // res.body.should.have.property("price")
                // res.body.should.have.property("name")
                // res.body.should.have.property("description")
                // res.body.should.have.property("image")
                //res.body.should.be.a('json')
                res.should.have.status(200)
                done();
        });
    });

    it("should get all users", function (done) {
        chai.request(app)
            .get("/user")
            .end((err, res) => {
                // res.body.should.have.property("image")
                // res.body.should.have.property("first_name")
                // res.body.should.have.property("username")
                // res.body.should.have.property("last_name")
                // res.body.should.have.property("profile_description")
                //res.body.should.be.a('json')
                res.should.have.status(200)
                done();
        });
    });
});