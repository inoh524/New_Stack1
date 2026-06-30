const express = require("express");
const cors = require("cors");

const user_routes = require("./routes/user_routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", user_routes);

module.exports = app;