const express = require("express");
const request = require("request");
const cors = require('cors');
const config = require("./config/config");

const app = express();
app.use(cors())

app.get("/", async(req, res) => {
    const url = `${config.EVERYTHING_URL}?q=${config.COUNTRY_CODE}&sortBy=publishedAt&apiKey=${config.API_KEY}`
    await request({url}, (err, resp) => {
        const data = JSON.parse(JSON.parse(JSON.stringify(resp.body)));
        res.send(data)
    })
});

app.listen(config.PORT, () => {
    console.log(`Server is up at port ${config.PORT}`);
})