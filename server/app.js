const express = require("express");
const request = require("request");
const cors = require('cors');
const config = require("./config/config");

const app = express();
app.use(cors())

app.get("/", async(req, res) => {
    const queryFilter = req.query.filter ? req.query.filter : config.COUNTRY_CODE;
    const url = `${config.EVERYTHING_URL}?q=${queryFilter}&sortBy=publishedAt&apiKey=${config.API_KEY}`
    await request({url}, (err, resp) => {
        const data = JSON.parse(JSON.parse(JSON.stringify(resp.body)));
        res.send(data)
    })
});

module.exports = app.listen(config.PORT, () => {
    console.log(`Server is up at port ${config.PORT}`);
})