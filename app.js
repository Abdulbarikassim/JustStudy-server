const express = require("express");
const { connectDB } = require("./config/db");
const lessonsRoutes = require("./routes/lessonsRoutes");
const { logger } = require("./routes/logger");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const fileDirectory =
  "/Users/abdulbari/Desktop/Uniwork/Fullstack Development/FrontEndcourseWorkProject/images";
//express app and port for the server.
const app = express();
const port = process.env.PORT || 5001;
// connect to mongodb.
connectDB();
app.use(cors());
app.use(express.json());

// logger middleware.
app.use(logger);
// routes for API's.
app.use("/api", lessonsRoutes);
//staic.
app.use("/images", function (req, res, next) {
  var filePath = path.join(fileDirectory, req.url);
  console.log(filePath);

  fs.stat(filePath, (err, fileInfo) => {
    if (err) {
      next();
      return;
    }

    if (fileInfo.isFile()) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });
});

// error handler.
app.use(function (req, res, next) {
  res.status(404);
  res.send("No file was found");
});

app.listen(port, () => {
  console.log("server running on port: ", port);
});
