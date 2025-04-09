require("dotenv").config({ path: "./opt/practice/.env" });
var express = require("express");
var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./utils/dbConnect");
var cors = require("cors");
// require("./utils/transporter")


var app = express();



app.set('view engine', 'ejs');
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("error");
})

app.get("/health-check", (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send('<h1>Health OK.</h1>');
})

var userRouter = require("./routes/users");



app.use("/user", userRouter);


app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {

  res.locals.message = err.message;
  
  res.locals.error = req.app.get("env") === "development" ? err : {};

  if (err.status == 404) res.render("error");  
});

module.exports = app;
