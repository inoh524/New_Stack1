const express = require("express");
const cors = require("cors");

const user_routes = require("./routes/user_routes");
const auth_routes = require("./routes/auth_routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend API is running");
});

app.use("/api/users", user_routes);
app.use("/api/auth", auth_routes);

module.exports = app;