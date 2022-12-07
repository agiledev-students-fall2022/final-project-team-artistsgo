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
                res.body.should.be.an('object');
                res.should.have.status(200);
                res.body.should.have.nested.property('products[0].author_username');
                res.body.should.have.nested.property('products[0].description');
                res.body.should.have.nested.property('products[0].image');
                res.body.should.have.nested.property('products[0].createdAt');
                res.body.should.have.nested.property('products[0].updatedAt');
                res.body.should.have.nested.property('products[0]._id');
                res.body.should.have.nested.property('products[0].__v');
                res.body.should.have.nested.property('products[0].name');
                res.body.should.have.nested.property('products[0].price');
                res.body.should.have.nested.property('products[0].tags');
                done();
        });
    });

    it("should get all users", function (done) {
        chai.request(app)
            .get("/user")
            .end((err, res) => {
                res.body.should.have.property("users");
                res.body.should.be.an('object');
                res.should.have.status(200);
                res.body.should.have.nested.property('users[0].last_name');
                res.body.should.have.nested.property('users[0].first_name');
                res.body.should.have.nested.property('users[0].email');
                res.body.should.have.nested.property('users[0]._id');
                res.body.should.have.nested.property('users[0].profilepic');
                res.body.should.have.nested.property('users[0].username');
                res.body.should.have.nested.property('users[0].products');
                res.body.should.have.nested.property('users[0].profiledescription');
                done();
        });
    });
});