const {calculate: android} = require("./src/hkey/android");
const {calculate: web} = require("./src/hkey/web");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan');

const app = express();
const port = 9999;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));


app.post("/hkey/android", (req, res) => {
    console.log(req.body)
    const url = android(req.body.url, req.body.timestamp, req.body.nonce);
    console.log(url)
    res.json({"url": url});
});


app.post("/hkey/web", (req, res) => {
    console.log(req.body)
    const url = web(req.body.url, req.body.timestamp, req.body.nonce);
    console.log(url)
    res.json({"url": url});
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


