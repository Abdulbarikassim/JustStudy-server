const express = require("express");
const connectDB = require("./config/db");
const lessonsRoutes = require("./routes/lessonsRoutes");
const app = express();
// connect to mongodb.
connectDB();
// middleware.

app.use(express.json());

//routes.

app.use("/api", lessonsRoutes);

// export the app to server.

module.exports = app;
