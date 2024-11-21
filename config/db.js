require("dotenv").config();
const { MongoClient } = require("mongodb");

let client;
let db;

function connectDB() {
  client = new MongoClient(process.env.MONGODB_URL);
  return client
    .connect()
    .then(() => {
      console.log("MongoDB connected successfully.");
      db = client.db("justStudy_data");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err.message);
      process.exit(1);
    });
}

function getDB() {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB first.");
  }
  return db;
}

module.exports = { connectDB, getDB };
