import dotenv from "dotenv";

dotenv.config();

const config = {
  dbUri: process.env.DB_CONNECT,
  privateKey: process.env.PRIVATE_KEY,
  publicKey: process.env.PUBLIC_KEY,
};

export default config;
