const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');
require('dotenv').config();
const conf = require('./config');

const corsConfig = {
  origin: conf.CORS_ORIGIN,
  credentials: true,
  exposedHeaders: 'Authorization'
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(router);


(async function bootstrap () {
  await mongoose.connect(conf.MONGOOSE_URI);
  console.log('Conected to MongoDB.');

  app.listen(conf.SERVER_PORT, () => console.log(`Server listening on host ${conf.SERVER_HOST} and port ${conf.SERVER_PORT}.`))
})();