const mongoose = require("mongoose");

const connect = mongoose.createConnection(process.env.URL);

module.exports = {
    connect
}