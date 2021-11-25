// connect the mongoDB
const mongoose = require("mongoose");
const config = require("config");
// to grab the whatever inside the default.json
const db = config.get("mongoURI");

// to connect to the DB
const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });

    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);

    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
