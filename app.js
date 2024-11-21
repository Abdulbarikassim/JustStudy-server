const express = require("express");
const { connectDB } = require("./config/db");
const lessonsRoutes = require("./routes/lessonsRoutes");
const { logger } = require("./routes/logger");
//express app and port for the server.
const app = express();
const port = process.env.PORT || 5001;
// connect to mongodb.
connectDB();

app.use(express.json());

// logger middleware.
app.use(logger);
//staic.
app.use(
  "/images",
  express.static(
    "/Users/abdulbari/Desktop/Uniwork/Fullstack Development/FrontEndcourseWorkProject/images"
  )
);
// routes for API's.
app.use("/api", lessonsRoutes);

app.listen(port, () => {
  console.log("server running on port: ", port);
});
