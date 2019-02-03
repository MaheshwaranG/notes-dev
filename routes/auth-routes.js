const passport = require("passport");
module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send({ status: "logout", user: req.user });
  });

  app.get("/api/currentUser", (req, res) => {
    res.send(req.user);
  });
};