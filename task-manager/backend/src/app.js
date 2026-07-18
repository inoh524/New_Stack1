const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const user_routes = require("./routes/user_routes");
const auth_routes = require("./routes/auth_routes");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(cors());
app.use(express.json());
// Read cookies from req.cookies
app.use(cookieParser());

//test route
app.get("/", (req, res) => {
  res.send("Backend API is running");
});
//routes
app.use("/api/users", user_routes);
app.use("/api/auth", auth_routes);


module.exports = app;