var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();
app.use(cookieParser());
app.get("/api/node/setcookies", function (req, res) {
  const expires = new Date(2023, 5, 1, 12);
  res.cookie("user", "alice", { expires: expires, httpOnly: true });
  res.cookie("roles", "guest");
  res.send({
    user: "alice",
    roles: "guest",
    auth: req.cookies.auth,
    xDevProxy: req.headers["x-devproxy"] || "-",
    // headers: req.headers,
  });
});
app.listen(3100, function () {
  console.log("Example app listening on port 3100!");
});
