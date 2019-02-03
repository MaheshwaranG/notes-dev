const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const keys = require("../../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("user-account");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(user => {
        if (user) {
          done(null, user);
        } else {
          new User({
            googleId: profile.id,
            username: profile.displayName
          })
            .save()
            .then(user => {
              done(null, user);
            });
        }
      });
    }
  )
);
