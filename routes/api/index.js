const route = require("express").Router();

route.use("/articles", require("./articles"));
route.use("/categories", require("./categories"));

module.exports = route;
