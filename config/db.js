const { MongoClient } = require("mongodb");

const connectDB = async () => {
  try {
    await MongoClient.connect(process.env.MONGODB_URL);
    console.log("mongoDB connected.");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
