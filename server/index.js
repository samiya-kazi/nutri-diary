const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');
require('dotenv').config();
const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

// const corsConfig = {
//   origin: 'https://thumb-stack-client.vercel.app',
//   credentials: true,
//   exposedHeaders: 'Authorization'
// };

app.use(cors());
app.use(express.json());
app.use(router);


(async function bootstrap () {
  await mongoose.connect('mongodb://127.0.0.1:27017/nutri-diary');
  console.log('Conected to MongoDB.');

  app.listen(PORT, () => console.log(`Server listening on host ${HOST} and port ${PORT}.`))
})();