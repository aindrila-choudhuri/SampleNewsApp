const chai = require("chai");
const chaiHttp = require("chai-http")
const server = require("../app");

chai.should();

chai.use(chaiHttp);

describe("News API", () => {
    describe("GET api", () => {
        it("It should get all news articles with defaut keyword", (done) => {
            chai.request(server).get("/").end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property("articles");
                res.body.articles.should.be.a("array");
                res.body.articles.length.should.not.equal(0);
                done();
            })
        })
    });

    describe("GET api with query params", () => {
        it("It should get all news articles with the query parameter passed", (done) => {
            chai.request(server).get("/")
            .query({
                filter: "apple"
             })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property("articles");
                res.body.articles.should.be.a("array");
                res.body.articles.length.should.not.equal(0);
                done();
            })
        })
    });
});

