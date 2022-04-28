const express = require('express');
const app = express();
const { routes } = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

const { connect } = require('./db/connection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

routes(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})