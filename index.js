const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const dbUtils = require("./src/utils/db");

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'POST, PUT, GET, DELETE, OPTIONS, PATCH',
    allowedHeaders: 'Accept, Content-Type, Accept-Encoding, Content-Length, Authorization',
  }))

//DataBase Connection
const db = mongoose.connection;
dbUtils();

if(db){
    db.once("open", function() {
        console.log("Connected successfully!")
    })

    const PORT = process.env.PORT || 3000;

    app.listen(PORT);
    console.log(`App Running on port: ${PORT}`);
}else{
    db.on("error", console.error.bind(console, "connection error: "))
}

app.get('/', (req, res) => {
    res.send('Server Running!')
    console.log("Server Running!")
})