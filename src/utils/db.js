const mongoose = require("mongoose")
require('dotenv').config();

const dbURL = process.env.db;

function dbConnection() {
    mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};

module.exports = dbConnection;