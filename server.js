var express = require("express");
var mongoose = require("mongoose");
var dotenv = require('dotenv').config()
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");
var apiController = require('./controllers/apiController')

var PORT = process.env.PORT || 3000;
mongoose.Promise = bluebird;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/build"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://abc:123abc@ds123171.mlab:23171/nyt");

//var db = process.env.MONGODB_URI || "mongodb://abc:123abc@ds123171.mlab.com:23171/nyt";

//mongoose.connect(db, function(error) {
// if (error) {
//   console.error(error);
//} else {
//  console.log("mongoose connection is successful");
//}
//});

app.use("/", routes);

app.post("/api/articles", apiController.create);

app.get("/api/articles", apiController.index);

app.delete("/api/articles/:id", apiController.destroy);

app.listen(PORT, function() {});