// This is the main express file.
//connect the dotenv.
require("dotenv").config();

const app = require("./app");
const port = 3000;

app.listen(port, () => {
  console.log("server running on port: ", port);
});
