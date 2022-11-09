import mongoose from "mongoose";
import config from "../config/default.js";

async function connect() {
  const dbUri = config.dbUri;

  try {
    await mongoose.connect(dbUri);
    console.log("db connected");
  } catch (error) {
    console.log("could not connect to db");
    process.exit(1);
  }
}

export default connect;
