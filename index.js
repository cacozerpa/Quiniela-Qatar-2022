const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const dbUtils = require("./src/utils/db");
require('dotenv').config();

const userRouter = require('./src/routes/user');

const app = express();
app.use(express.json())
const db = mongoose.connection;

// app.use(express.urlencoded( { extended: true } ))


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

app.use(userRouter);

app.get('/', (req, res) => {
    res.send('Server Running!')
})

