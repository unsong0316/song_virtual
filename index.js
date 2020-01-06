const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const _webPort = 80;
global.app = express();
app.use(cors());
global.router = express.Router();
global.path = __dirname;
app.use(bodyParser.json());
app.use("/", router);

router.get("/", (req, res) => {
    res.sendFile(`${path}/web-client/index.html`);
});
app.listen(_webPort, () => {
    console.log(`web server running on ${_webPort}`);
});