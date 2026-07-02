const express = require("express");
const cors = require("cors");

const user_routes = require("./routes/user_routes");
const auth_routes = require("./routes/auth_routes");
const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", user_routes);
app.use("/auth", auth_routes);
app.use("/api/users", user_routes);
app.use("/api/auth", auth_routes);

module.exports = app;