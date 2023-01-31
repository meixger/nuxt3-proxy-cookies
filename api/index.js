var express = require("express");
var cookieParser = require("cookie-parser");
const crypto = require("crypto");
var app = express();
app.use(cookieParser());
app.get("/api/node/setcookies", function (req, res) {
  const expires = new Date(2023, 5, 1, 12);
  res.cookie("user", "alice", { expires: expires, httpOnly: true });
  res.cookie("roles", "guest");
  let auth = req.cookies.auth;
  if (!auth) {
    auth = "missing-you-receive-a-new-cookie-now";
    res.cookie(
      "auth",
      req.cookies.auth || crypto.randomBytes(8).toString("hex")
    );
  }
  res.send({
    user: "alice",
    roles: "guest",
    auth: auth,
    xDevProxy: req.headers["x-devproxy"] || "-",
    // headers: req.headers,
  });
});
app.listen(3100, function () {
  console.log("Example app listening on port 3100!");
});
