const passport = require("passport");
module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("http://localhost:3000/Dashboard");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send({ status: "logout", user: req.user });
    // res.redirect("http://localhost:3000/");
  });

  app.get("/api/currentUser", (req, res) => {
    res.send(req.user);
  });
};
