const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("express-hbs");
const path = require("path");

const app = express();

// view engine setting
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "hbs");
app.engine(
    "hbs",
    hbs.express4({
        extname: ".hbs",
        layoutsDir: __dirname + "/views/layouts",
        defaultLayout: __dirname + "/views/layouts/main",
        partialsDir: __dirname + "/views/partials"
    })
);

// Set static folder
app.use("/", express.static(path.join(__dirname, "/public")));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// router path setting
app.use("/api", require("./routes/api"));
//app.use("/admin", require("./routes/admin"));
app.use("/", require("./routes/pages"));

module.exports = {
    app
};
