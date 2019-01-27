const express = require("express");

var app = express();
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const keys = require("./config/keys");

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, callback) => {
      console.log(accessToken);
      console.log(profile);
    }
  )
);

app.get("/", (req, res) => {
  res.send({ welcome: "welcome to passport login" });
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback", passport.authenticate("google"));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
