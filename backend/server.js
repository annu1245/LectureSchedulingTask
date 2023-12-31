const express = require('express')
var cookieSession = require('cookie-session');
const fileUpload = require('express-fileupload');
require('./database/connection.js');
var bodyParser = require('body-parser');
const routes = require("./routes/api");
const path = require('path');

const app = express();
app.use(express.static('assets'));

app.use(fileUpload({ createParentPath: true }));
app.use(cookieSession({ keys: ['uid'] }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server  at http://0.0.0.0:${port}`)
})