const express = require("express");
const request = require("request");
const cors = require('cors')

const app = express();
app.use(cors())

app.get("/", async(req, res) => {
    const url = "http://newsapi.org/v2/everything?q=UK&from=2021-01-22&sortBy=publishedAt&apiKey=46eee9f5084a4160b19a917a91694358"
    await request({url}, (err, resp) => {
        const data = JSON.parse(JSON.parse(JSON.stringify(resp.body)));
        //console.log("data : ", data);
        res.send(data)
    })
});

app.listen(4004, () => {
    console.log("Server is up at port 4004");
})