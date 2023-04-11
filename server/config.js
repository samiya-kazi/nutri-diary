require('dotenv').config();

module.exports = {
  SERVER_PORT: process.env.SERVER_PORT,
  SERVER_HOST: process.env.SERVER_HOST,
  MONGOOSE_URI: process.env.MONGOOSE_URI,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  JWT_SECRET: process.env.JWT_SECRET
}