const passport = require("passport");
module.exports = (app, checkUserLogin) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      // console.log(req.user);
      res.redirect("/");
    }
  );

  app.get("/api/logout", checkUserLogin, (req, res) => {
    req.logout();
    res.send({ status: "logout", user: req.user });
    // res.redirect("http://localhost:3000/");
  });

  app.get("/api/currentUser", checkUserLogin, (req, res) => {
    // console.log("Session Data  : " + JSON.stringify(req.session))
    res.send(req.user);
  });
};
