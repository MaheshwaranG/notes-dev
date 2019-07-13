const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const keys = require("../../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("user-account");

passport.serializeUser((user, done) => {
  done(null, user.googleId);
});

passport.deserializeUser((googleId, done) => {
  User.findOne({ googleId }).then(user => {
    done(null, user);
  });
});

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
      // proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log(JSON.stringify(profile) + "\n===\n");
      // console.log(profile._raw);
      let googlePlus = JSON.parse(profile._raw);
      // console.log(profile.id);
      const user = await User.findOne({ googleId: profile.id });
      // console.log(profile._raw);
      if (user) {
        return done(null, user);
      }
      const newUser = await new User({
        _id: new mongoose.Types.ObjectId(),
        googleId: profile.id,
        displayName: profile.displayName,
        name: profile.name,
        email: profile.emails[0].value,
        emails: profile.emails,
        photos: profile.photos,
        gender: profile.gender,
        skills: googlePlus.skills,
        tagline: googlePlus.tagline,
        googleplusurl: googlePlus.url,
        organizations: googlePlus.organizations,
        placeslived: googlePlus.placesLived,
        provider: "google"
      }).save();
      done(null, newUser);
    }
  )
);
