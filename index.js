const express = require("express");
var app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");
const path = require("path");
const client = path.join(__dirname + "/client/build");

mongoose.connect(keys.mongoURI);
const cookieSession = require("cookie-session");
const passport = require("passport");

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(client));
const checkUserLogin = (req, res, next) => {
  // console.log("in check")
  if (req.isAuthenticated()) {
    // console.log("in checked done")
    next();
  }
  else {
    // console.log("NOT done")
    res.json({ status: "logout" });
  }
}

require("./routes/auth-routes")(app, checkUserLogin);
require("./models/user-models/user-account-model");
require("./services/passport/auth-service");

// app.get("/", (req, res) => {
//   res.send({ welcome: "welcome to passport login" });
// });


app.get("/", (req, res) => {
  res.sendFile(path.join(client + "/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
