const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const dbUtils = require("./src/utils/db");
require('dotenv').config();

const app = express();
const db = mongoose.connection;

app.use(express.json())

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'POST, PUT, GET, DELETE, OPTIONS, PATCH',
    allowedHeaders: 'Accept, Content-Type, Accept-Encoding, Content-Length, Authorization',
  }))

//DataBase Connection
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
})

