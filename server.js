const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
const proxy = require("http-proxy-middleware");
const app = express();

connectDB();

app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json({ extended: false }));

app.use("/api/visited-places", require("./routes/api/visited-places"));
app.use(
  "/api/social-interactions",
  require("./routes/api/social-interactions")
);

// for api and client to run on same server
module.exports = function (app) {
  // add other server routes to path array
  app.use(proxy(["/api"], { target: "http://localhost:5000" }));
};

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
