const express = require('express');
const app = express();
const { routes } = require('./routes/routes');
require("dotenv").config();

const { connect } = require('./db/connection');

console.log(connect)

routes(app);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})